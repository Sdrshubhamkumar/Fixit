import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import ShopCard from '../components/ShopCard';

const typeToServiceMap = {
  Electronics: ['Electrical Appliance', 'Electrical Repairs'],
  Plumber: ['Plumber'],
  Furniture: ['Furniture'],
  Vehicle: ['Vehicle'],
  Painting: ['Painting & Wall Repair'],
  Roofing: ['Roof & Waterproofing'],
};

const ShopList = () => {
  const [shops, setShops] = useState([]);
  const [filteredShops, setFilteredShops] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const service = searchParams.get('service');

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'shops'));
        const allShops = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setShops(allShops);
      } catch (error) {
        console.error('Error fetching shops:', error);
      }
    };

    fetchShops();
  }, []);

  useEffect(() => {
    if (!service || shops.length === 0) return;

    const matched = shops.filter(shop => {
      const shopServices = shop.services || typeToServiceMap[shop.shopType] || [];
      return shopServices.includes(service);
    });

    setFilteredShops(matched);
  }, [service, shops]);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Shops offering: <span className="text-blue-600">{service}</span>
      </h1>

      {filteredShops.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredShops.map(shop => (
            <ShopCard key={shop.id} shop={shop} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">No shops available for {service}</p>
      )}
    </div>
  );
};

export default ShopList;
