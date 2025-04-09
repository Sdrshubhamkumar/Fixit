import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const searchDestination = () => {
    const value = document.getElementById("searchBar")?.value;
    alert(`Searching for: ${value}`);
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
        {/* Search Bar */}
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
        <ul className="flex list-none justify-center space-x-5 text-base">
          <li>
            <a href="#Home" className="hover:underline">Home</a>
          </li>
          <li>
            <a href="#Setting" className="hover:underline">Setting</a>
          </li>
          <li>
            <a href="#box1" className="hover:underline">About Us</a>
          </li>
          <li>
            <a href="#Help" className="hover:underline">Help</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
