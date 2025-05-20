import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage, auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const AddShop = () => {
  const [form, setForm] = useState({
    shopName: '',
    ownerName: '',
    shopType: '',
    address: '',
    phone: '',
    imageFile: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'imageFile') {
      setForm({ ...form, imageFile: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uid = auth.currentUser.uid;
    const shopId = uuidv4();

    let imageUrl = '';
    if (form.imageFile) {
      const imgRef = ref(storage, `shopImages/${uid}/${shopId}_${form.imageFile.name}`);
      await uploadBytes(imgRef, form.imageFile);
      imageUrl = await getDownloadURL(imgRef);
    }

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

    navigate('/shop-dashboard');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-8 bg-white shadow-lg p-6 rounded-xl space-y-4">
      <h2 className="text-2xl font-bold text-center">Add Your Shop</h2>
      <input name="shopName" value={form.shopName} onChange={handleChange} placeholder="Shop Name" className="w-full border p-2 rounded" required />
      <input name="ownerName" value={form.ownerName} onChange={handleChange} placeholder="Owner's Name" className="w-full border p-2 rounded" required />
      <input name="shopType" value={form.shopType} onChange={handleChange} placeholder="Shop Type" className="w-full border p-2 rounded" required />
      <textarea name="address" value={form.address} onChange={handleChange} placeholder="Address" className="w-full border p-2 rounded" required />
      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="w-full border p-2 rounded" required />
      <input type="file" name="imageFile" accept="image/*" onChange={handleChange} />
      <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">Submit</button>
    </form>
  );
};

export default AddShop;
