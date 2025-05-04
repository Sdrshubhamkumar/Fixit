import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc, collection, onSnapshot, updateDoc } from 'firebase/firestore';

const ShopDetails = () => {
  const { shopId } = useParams();
  const [shop, setShop] = useState(null);
  const [bookings, setBookings] = useState([]);

  // Fetch shop details
  useEffect(() => {
    const fetchShop = async () => {
      try {
        const shopRef = doc(db, 'shops', shopId);
        const shopSnap = await getDoc(shopRef);
        if (shopSnap.exists()) {
          setShop({ id: shopSnap.id, ...shopSnap.data() });
        }
      } catch (err) {
        console.error('Error fetching shop:', err);
      }
    };

    fetchShop();
  }, [shopId]);

  // Fetch booking requests
  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'shops', shopId, 'bookings'), (snapshot) => {
      const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBookings(list);
    });

    return unsub;
  }, [shopId]);

  const handleAccept = async (booking) => {
    const bookingRef = doc(db, 'shops', shopId, 'bookings', booking.id);
    await updateDoc(bookingRef, { status: 'Accepted' });

    // Email logic (via backend API)
    try {
      await fetch('https://your-backend.com/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: booking.email,
          subject: 'Your Service Request has been Accepted',
          message: `Hello ${booking.name},\n\nYour request for ${booking.serviceType} service has been accepted. The shop will reach out to you shortly.\n\nThanks!`
        }),
      });
    } catch (err) {
      console.error('Email send failed', err);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {shop ? (
        <div className="mb-6 bg-white shadow p-4 rounded">
          <img src={shop.imageUrl} alt={shop.shopName} className="w-full h-64 object-cover rounded mb-4" />
          <h2 className="text-3xl font-bold">{shop.shopName}</h2>
          <p className="text-gray-600">{shop.shopType}</p>
          <p className="text-gray-500">{shop.address}</p>
          <p className="text-gray-500">Owner: {shop.ownerName}</p>
          <p className="text-gray-500">Phone: {shop.phone}</p>
        </div>
      ) : (
        <p>Loading shop details...</p>
      )}

      <h3 className="text-2xl font-semibold mb-4">Service Requests</h3>
      {bookings.length === 0 ? (
        <p>No service requests yet.</p>
      ) : (
        bookings.map((b) => (
          <div key={b.id} className="bg-white p-4 mb-4 rounded shadow">
            <p><strong>Name:</strong> {b.name}</p>
            <p><strong>Email:</strong> {b.email}</p>
            <p><strong>Phone:</strong> {b.phone}</p>
            <p><strong>Address:</strong> {b.address}</p>
            <p><strong>Service:</strong> {b.serviceType}</p>
            <p><strong>Date:</strong> {b.serviceDate}</p>
            <p><strong>Time:</strong> {b.serviceTime}</p>
            <p><strong>Details:</strong> {b.details}</p>
            <p><strong>Status:</strong> {b.status || 'Pending'}</p>
            <button
              onClick={() => handleAccept(b)}
              className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Accept Request
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ShopDetails;
