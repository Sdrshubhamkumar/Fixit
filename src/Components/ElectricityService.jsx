import React from 'react';
import { Link } from "react-router-dom";
import { FaPlug, FaTools, FaLightbulb, FaBolt, FaQuestionCircle } from 'react-icons/fa';

export default function ElectricityService() {
  return (
    <div className=" min-h-screen p-6">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Electricity Services</h1>
        <p className="text-lg text-gray-500 mt-2">Safe, Reliable, and Affordable Electrical Solutions</p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {[
          { icon: <FaLightbulb />, title: 'Light Installation', desc: 'Install or replace lights and fixtures.' },
          { icon: <FaPlug />, title: 'Switch & Socket Repair', desc: 'Fix broken or faulty switches and sockets.' },
          { icon: <FaBolt />, title: 'Short Circuit Fixing', desc: 'Troubleshoot and fix circuit issues.' },
          { icon: <FaTools />, title: 'Wiring Work', desc: 'Complete home or office wiring solutions.' },
          { icon: <FaBolt />, title: 'Inverter Installation', desc: 'Setup and configure inverters safely.' },
          { icon: <FaPlug />, title: 'Smart Home Setup', desc: 'Automate lighting and appliances.' },
        ].map((service, index) => (
          <div key={index} className="bg-[url('/public/videos/light_back_video.gif')] p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition">
            <div className="text-4xl text-blue-600 mb-4 mx-auto">{service.icon}</div>
            <h3 className="text-xl font-semibold text-blue-800">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.desc}</p>
            <div className="mt-4">
  <Link
    to="/book-service"
    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition inline-block"
  >
    Book Now
  </Link>
</div>

          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">FAQs</h2>
        <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto text-gray-700">
          <div className="bg-blue-100 p-4 rounded-xl">
            <p className="font-semibold"><FaQuestionCircle className="inline text-blue-600 mr-2" />What are your service hours?</p>
            <p className="text-sm mt-1">We are available 24/7 including weekends.</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-xl">
            <p className="font-semibold"><FaQuestionCircle className="inline text-blue-600 mr-2" />Are electricians certified?</p>
            <p className="text-sm mt-1">Yes, all electricians are licensed and insured.</p>
          </div>
        </div>
      </div>
    </div>
  );
}