import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const searchDestination = () => {
    const value = document.getElementById("searchBar")?.value.trim().toLowerCase();
  
    const routeMap = [
      { keywords: ["electrical service", "electrical"], path: "/repair" },
      { keywords: ["electric service", "electric"], path: "/services/electric" },
      { keywords: ["plumber service", "plumber"], path: "/services/plumber" },
      { keywords: ["furniture service", "furniture"], path: "/services/furniture" },
      { keywords: ["spa", "salon", "spa & salon"], path: "/spasalon" }
    ];
  
    const match = routeMap.find(entry =>
      entry.keywords.some(keyword => value.includes(keyword))
    );
  
    if (match) {
      navigate(match.path);
    } else {
      alert("Service not found. Try: electrical, plumber, spa, etc.");
    }
  };
  

  return (
    <div className="bg-blue-100 flex flex-col">
      {/* Top Header Bar */}
      <header className="bg-indigo-200 flex items-center justify-around px-4 fixed top-0 w-full z-10 py-3">
        <h1 className="text-xl font-bold">FIXIT</h1>
        <button className="bg-white px-4 py-1 rounded-md shadow">
          <Link to="/login">Login or signup</Link>
        </button>
      </header>

      {/* Navigation & Search Section */}
      <nav className="pt-20 flex flex-col sm:flex-row items-center justify-around px-4 pb-4">
        <div className="w-full sm:w-1/2 flex items-center mb-4 sm:mb-0">
          <input
            className="px-4 h-9 rounded-full border border-blue-400 bg-white w-full"
            id="searchBar"
            type="search"
            placeholder="Search Your Destination !!"
          />
          <button onClick={searchDestination} className="ml-2">
            <img
              className="h-6"
              src="https://purepng.com/public/uploads/large/search-icon-lob.png"
              alt="search"
            />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="flex list-none justify-center space-x-5 text-base relative">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li className="relative group">
            <span className="hover:underline cursor-pointer">Services</span>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <ul className="py-2">
                <li><Link to="/services/electric" className="block px-4 py-2 hover:bg-gray-100">Electric Service</Link></li>
                <li><Link to="/repair" className="block px-4 py-2 hover:bg-gray-100">Electrical Services</Link></li>
                <li><Link to="/services/plumber" className="block px-4 py-2 hover:bg-gray-100">Plumber Services</Link></li>
                <li><Link to="/services/furniture" className="block px-4 py-2 hover:bg-gray-100">Furniture Services</Link></li>
                <li><Link to="/spasalon" className="block px-4 py-2 hover:bg-gray-100">Spa & Salon</Link></li>
              </ul>
            </div>
          </li>
          <li><Link to="/about" className="hover:underline">About Us</Link></li>
          <li><Link to="/help" className="hover:underline">Help</Link></li>
        </ul>
      </nav>
    </div>
  );
}
