import React from "react";
import { Link } from "react-router-dom";
import { FaBug, FaShieldAlt, FaSprayCan, FaBroom } from "react-icons/fa";

const services = [
  {
    title: "General Pest Control",
    description: "Eliminate common pests like ants, cockroaches, and spiders.",
    icon: <FaBug className="text-4xl text-green-700" />,
  },
  {
    title: "Termite Treatment",
    description: "Protect your home from destructive termites.",
    icon: <FaShieldAlt className="text-4xl text-yellow-700" />,
  },
  {
    title: "Mosquito Control",
    description: "Keep your surroundings mosquito-free.",
    icon: <FaSprayCan className="text-4xl text-blue-700" />,
  },
  {
    title: "Bed Bug Treatment",
    description: "Effective solutions to remove bed bugs.",
    icon: <FaBroom className="text-4xl text-red-700" />,
  },
];

export default function PestsControl() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 p-8">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-8">Pests Control Services</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-xs hover:shadow-2xl transition-transform hover:scale-105"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold text-center text-green-800 mb-2">{service.title}</h2>
            <p className="text-gray-600 text-sm text-center mb-4">{service.description}</p>
            <div className="flex justify-center">
              <Link to="/book-service" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
  Book Service
</Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}