import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import ShopCard from '../components/ShopCard';

const ShopDashboard = () => {
  const [shops, setShops] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const q = query(collection(db, 'shops'), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(q, snap => {
      const list = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setShops(list);
    });
    return unsub;
  }, []);

  return (
    <div className="p-4 min-h-screen">
     {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm brightness-90 z-[-1]"
        style={{
          backgroundImage:
            "url('https://homecareanandfacilities.com/wp-content/uploads/2019/12/home-deep-cleaning-870x500.jpg')",
        }}
      ></div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Shop Dashboard</h1>
        <button
          onClick={() => navigate('/add-shop')}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Shop
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shops.map(shop => (
          <ShopCard key={shop.id} shop={shop} />
        ))}
      </div>
    </div>
  );
};

export default ShopDashboard;
