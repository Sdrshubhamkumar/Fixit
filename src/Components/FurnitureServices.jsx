import React from "react";
import { FaCouch, FaTools, FaPaintRoller, FaWrench, FaArrowsAlt, FaBug } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Furniture Assembly",
    description: "Assemble beds, tables, wardrobes, and modular furniture.",
    icon: <FaTools className="text-4xl text-blue-600" />,
  },
  {
    title: "Furniture Repair",
    description: "Repair broken or damaged furniture with skilled carpenters.",
    icon: <FaWrench className="text-4xl text-blue-600" />,
  },
  {
    title: "Furniture Polishing",
    description: "Get your wood polished for a fresh, new look.",
    icon: <FaPaintRoller className="text-4xl text-blue-600" />,
  },
  {
    title: "Sofa Upholstery",
    description: "Reupholster your sofa with new fabric or leather.",
    icon: <FaCouch className="text-4xl text-blue-600" />,
  },
  {
    title: "Furniture Shifting",
    description: "Dismantle and reassemble furniture for relocation.",
    icon: <FaArrowsAlt className="text-4xl text-blue-600" />,
  },
  {
    title: "Termite Treatment",
    description: "Protect your wooden furniture from termite damage.",
    icon: <FaBug className="text-4xl text-blue-600" />,
  },
];

export default function FurnitureServices() {
  return (
    <div className="min-h-screen bg-blue-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">Furniture Services</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold text-center mb-2">{service.title}</h2>
            <p className="text-gray-600 text-center mb-4">{service.description}</p>
            <div className="flex justify-center">
              <Link
                to="/book-service"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Book Service
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}