import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl bg-blue-300 mx-auto rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-10">
          We'd love to hear from you! Reach out to us using the details below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <FaPhone className="text-blue-600 text-3xl mb-2" />
            <h2 className="font-semibold text-lg mb-1">Phone</h2>
            <p className="text-gray-600">+91 8207397299</p>
          </div>

          <div className="flex flex-col items-center">
            <FaEnvelope className="text-blue-600 text-3xl mb-2" />
            <h2 className="font-semibold text-lg mb-1">Email</h2>
            <p className="text-gray-600">shubhamkumar29801@gmail.com</p>
          </div>

          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-blue-600 text-3xl mb-2" />
            <h2 className="font-semibold text-lg mb-1">Address</h2>
            <p className="text-gray-600">123 Home Lane, Delhi, India</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
          <p className="text-gray-600">Monday - Saturday: 9:00 AM – 8:00 PM</p>
          <p className="text-gray-600">All Days Open</p>
        </div>
      </div>
    </div>
  );
}