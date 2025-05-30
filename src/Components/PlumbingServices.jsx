import React from "react";
import { FaWrench, FaToilet, FaShower, FaWater, FaSink, FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  { title: "Leak Repairs", icon: <FaWater /> },
  { title: "Clogged Drains", icon: <FaTools /> },
  { title: "Toilet Repairs & Installation", icon: <FaToilet /> },
  { title: "Tap and Faucet Installation", icon: <FaWrench /> },
  { title: "Shower Installation & Repairs", icon: <FaShower /> },
  { title: "Water Heater Installation", icon: <FaWater /> },
  { title: "Pipe Installation and Replacement", icon: <FaWrench /> },
  { title: "Bathroom Plumbing", icon: <FaSink /> },
  { title: "Kitchen Sink Plumbing", icon: <FaSink /> },
  { title: "Outdoor Plumbing", icon: <FaTools /> },
  { title: "Water Tank Overflow Solutions", icon: <FaWater /> },
];

export default function PlumbingServices() {
  return (
    <div className="min-h-screen bg-blue-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
        Plumbing Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-transform hover:scale-105"
          >
            <div className="text-4xl text-blue-600 mb-4">{service.icon}</div>
            <h2 className="text-lg font-semibold mb-4 text-gray-800">{service.title}</h2>
            <Link
              to="/book-service"
              className="mt-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Book Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}