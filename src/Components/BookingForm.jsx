import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const BookingForm = () => {
  const { shopId } = useParams();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    serviceDate: '',
    serviceTime: '',
    serviceType: '',
    details: '',
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Submitting booking for shopId:', shopId);
      await addDoc(collection(db, 'shops', shopId, 'bookings'), {
        ...form,
        status: 'Pending',
      });

      alert('Booking submitted successfully!');

      // Reset the form
      setForm({
        name: '',
        phone: '',
        email: '',
        address: '',
        serviceDate: '',
        serviceTime: '',
        serviceType: '',
        details: '',
      });
    } catch (error) {
      console.error('Error saving booking:', error);
      alert('Failed to submit booking.');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Book Your Service</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {['name', 'phone', 'email', 'address', 'serviceType', 'details'].map(
          (field) => (
            <input
              key={field}
              name={field}
              value={form[field]}
              placeholder={field[0].toUpperCase() + field.slice(1)}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          )
        )}
        <input
          type="date"
          name="serviceDate"
          value={form.serviceDate}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="time"
          name="serviceTime"
          value={form.serviceTime}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
