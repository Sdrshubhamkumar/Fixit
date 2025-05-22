import React from "react";
import { Link } from "react-router-dom";

export default function CarWashServices() {
  const services = [
    {
      category: "Basic Services",
      items: ["Exterior Wash", "Interior Vacuuming", "Window Cleaning", "Tire and Wheel Cleaning"],
    },
    {
      category: "Premium Services",
      items: ["Full Detailing", "Waxing & Polishing", "Ceramic Coating", "Paint Protection Film (PPF)"],
    },
    {
      category: "Interior Services",
      items: ["Dashboard Cleaning", "Seat Shampooing", "Odor Removal", "Leather Treatment"],
    },
    {
      category: "Exterior Services",
      items: ["Foam Wash", "Underbody Wash", "Engine Bay Cleaning", "Scratch Removal"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-500 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">Car Wash Services</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {services.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all"
          >
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">{section.category}</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {section.items.map((item, idx) => (
                <li key={idx} className="flex justify-between items-center">
                  <span>{item}</span>
                  <Link
                    to="/book-service"
                    className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                  >
                    Book
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}