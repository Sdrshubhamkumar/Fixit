import React from 'react';
import { Link } from 'react-router-dom';
import electricalImage from '../assets/electrical-image.jpg';
import plumberImg from '../assets/plumber-img.jpg';
import furnitureImg from '../assets/furniture-img.jpg';
import carImg from '../assets/car-img.avif';
import electricImg from '../assets/electric-img.jpg';
import roofImg from '../assets/roof-img.webp';
import wallImg from '../assets/wall-img.webp';

const services = [
  {
    title: "Electrical Appliance",
    image: electricalImage,
    description: "Repairing and maintaining electrical appliances for safe and efficient use.",
  },
  {
    title: "Plumber",
    image: plumberImg,
    description: "Expert in fixing leaks, installing pipes, and ensuring a smooth water supply.",
  },
  {
    title: "Furniture",
    image: furnitureImg,
    description: "Assembling, repairing, and restoring furniture for a comfortable living space.",
  },
  {
    title: "Vehicle",
    image: carImg,
    description: "Servicing, repairing, and maintaining cars and bikes for smooth performance.",
  },
  {
    title: "Electrical Repairs",
    image: electricImg,
    description: "Expert solutions for wiring, appliance repair, and electrical safety.",
  },
  {
    title: "Roof & Waterproofing",
    image: roofImg,
    description: "Protect your home with expert roofing and waterproofing solutions.",
  },
  {
    title: "Painting & Wall Repair",
    image: wallImg,
    description: "Enhance your home with professional painting and wall repair services.",
  },
];

const RepairServices = () => {
  return (
    <div className="relative w-full min-h-screen font-sans overflow-hidden z-0">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center filter blur-sm brightness-90 z-[-1]"
        style={{ backgroundImage: `url('https://homecareanandfacilities.com/wp-content/uploads/2019/12/home-deep-cleaning-870x500.jpg')` }}>
      </div>

      {/* Content */}
      <section className="relative z-10 p-6">
        <div className="text-center my-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6">Appliances Services & Repair</h1>
          <ul className="flex flex-wrap justify-center gap-4">
            {services.map((s, idx) => (
              <li key={idx} className="bg-gray-100 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition transform hover:scale-105 cursor-pointer">
                {s.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="sub-container my-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-700 mb-8">Quick home repair</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-100 rounded-lg w-72 h-[350px] text-center shadow-lg hover:shadow-xl transition transform hover:scale-105">
                <img src={service.image} alt={service.title} className="w-full h-[60%] object-cover rounded-t-lg" />
                <div className="p-4">
                  <h2 className="text-lg font-bold">{service.title}</h2>
                  <p className="text-sm my-2">{service.description}</p>
                  <Link
                    to={`/select-shop?service=${encodeURIComponent(service.title)}`}
                    className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RepairServices;
