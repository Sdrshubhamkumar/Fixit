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

  // Accept booking
  const handleAccept = async (booking) => {
    const bookingRef = doc(db, 'shops', shopId, 'bookings', booking.id);

    try {
      await updateDoc(bookingRef, { status: 'Accepted' });

      const emailResponse = await fetch('https://us-central1-fixit-4f336.cloudfunctions.net/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: booking.email,
          name: booking.name,
          serviceType: booking.serviceType,
          serviceDate: booking.serviceDate,
          serviceTime: booking.serviceTime,
        }),
      });

      if (!emailResponse.ok) {
        throw new Error('Failed to send email');
      }

      console.log('Email sent successfully');
    } catch (err) {
      console.error('Email send failed', err);
      alert('Email send failed: ' + err.message);
    }
  };

  // Reject booking
  const handleReject = async (booking) => {
    const bookingRef = doc(db, 'shops', shopId, 'bookings', booking.id);

    try {
      await updateDoc(bookingRef, { status: 'Rejected' });
      alert(`Booking by ${booking.name} has been rejected.`);
    } catch (err) {
      console.error('Rejection failed', err);
      alert('Failed to reject request: ' + err.message);
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

            {b.status !== 'Accepted' && b.status !== 'Rejected' && (
              <div className="mt-2 space-x-2">
                <button
                  onClick={() => handleAccept(b)}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleReject(b)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default ShopDetails;
