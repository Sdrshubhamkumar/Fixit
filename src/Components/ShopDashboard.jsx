import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { doc, setDoc, collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage, auth } from '../firebase';        // make sure you export db & storage too

const ShopDashboard = () => {
  /* form state */
  const [form, setForm] = useState({
    shopName: '',
    ownerName: '',
    shopType: '',
    address: '',
    phone: '',
    imageFile: null,
  });

  /* list of shops */
  const [shops, setShops] = useState([]);

  /* live listener */
  useEffect(() => {
    const q = query(collection(db, 'shops'), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(q, (snap) => {
      const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      setShops(list);
    });
    return unsub;
  }, []);

  /* handle input change */
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'imageFile') {
      setForm({ ...form, imageFile: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  /* submit */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const uid = auth.currentUser.uid;
    const shopId = uuidv4();

    // 1. upload image if any
    let imageUrl = '';
    if (form.imageFile) {
      const imgRef = ref(storage, `shopImages/${uid}/${shopId}_${form.imageFile.name}`);
      await uploadBytes(imgRef, form.imageFile);
      imageUrl = await getDownloadURL(imgRef);
    }

    // 2. create doc
    await setDoc(doc(db, 'shops', shopId), {
      ownerUid: uid,
      shopName: form.shopName,
      ownerName: form.ownerName,
      shopType: form.shopType,
      address: form.address,
      phone: form.phone,
      imageUrl,
      createdAt: Date.now(),
    });

    // 3. reset form
    setForm({
      shopName: '',
      ownerName: '',
      shopType: '',
      address: '',
      phone: '',
      imageFile: null,
    });
  };

  /* JSX */
  return (
    <div className="min-h-screen p-4 bg-gray-100">
      {/* ---------- Add shop form ---------- */}
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto mb-8 bg-white shadow-lg p-6 rounded-xl space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Add Your Shop</h2>
        <input
          name="shopName"
          value={form.shopName}
          onChange={handleChange}
          placeholder="Shop Name"
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="ownerName"
          value={form.ownerName}
          onChange={handleChange}
          placeholder="Owner's Name"
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="shopType"
          value={form.shopType}
          onChange={handleChange}
          placeholder="Shop Type (e.g., Plumbing, Salon)"
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Shop Address"
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Mobile Number"
          className="w-full border p-2 rounded"
          pattern="[0-9]{10}"
          required
        />
        <input
          name="imageFile"
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="w-full"
        />
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
        >
          Submit
        </button>
      </form>

      {/* ---------- Shop cards ---------- */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shops.map((s) => (
          <div key={s.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            {s.imageUrl && (
              <img src={s.imageUrl} alt={s.shopName} className="h-40 w-full object-cover" />
            )}
            <div className="p-4 space-y-1">
              <h3 className="text-xl font-bold">{s.shopName}</h3>
              <p className="text-sm text-gray-600">Owner: {s.ownerName}</p>
              <p className="text-sm">Type: {s.shopType}</p>
              <p className="text-sm">📍 {s.address}</p>
              <p className="text-sm">📞 {s.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopDashboard;
