import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default function Header(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const isDark = props.mode === "dark";

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  const searchDestination = () => {
    const input = document.getElementById("searchBar");
    if (!input) return;
    const value = input.value.trim().toLowerCase();

    const routeMap = [
      { keywords: ["electrical service", "electrical"], path: "/repair" },
      { keywords: ["electric service", "electric"], path: "/services/electric" },
      { keywords: ["plumber service", "plumber"], path: "/services/plumber" },
      { keywords: ["furniture service", "furniture"], path: "/services/furniture" },
      { keywords: ["spa", "salon", "spa & salon"], path: "/spasalon" },
    ];

    const match = routeMap.find((entry) =>
      entry.keywords.some((keyword) => value.includes(keyword))
    );

    if (match) {
      navigate(match.path);
    } else {
      alert("Service not found. Try: electrical, plumber, spa, etc.");
    }
  };

  return (
    <div className={`${isDark ? "bg-gray-900 text-white" : "bg-blue-100 text-gray-800"} transition-all duration-500 shadow-sm`}>
      {/* Top Header */}
      <header className={`fixed top-0 w-full z-10 px-6 py-3 shadow-md flex items-center justify-between ${isDark ? "bg-gray-800 text-white" : "bg-indigo-200 text-indigo-800"} transition-all duration-500`}>
        <h1 className="text-xl font-bold">FIXIT</h1>

        <div className="flex items-center gap-6">
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm"> Hello !, {user.displayName || user.email}</span>
              <button
                onClick={handleLogout}
                className={`${isDark ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-white text-black hover:bg-gray-100"} px-4 py-1 rounded-md shadow transition-all duration-500`}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className={`${isDark ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-white text-black hover:bg-gray-100"} px-4 py-1 rounded-md shadow transition-all duration-500`}>
                Login / Signup
              </button>
            </Link>
          )}

          {/* Switch for Dark/Light Mode */}
          <div className="flex items-center gap-4">
            <label htmlFor="modeToggle" className="relative inline-block w-12 h-6">
              <input
                type="checkbox"
                id="modeToggle"
                className="opacity-0 w-0 h-0 absolute"
                onClick={props.toggleMode}
              />
              <span
                className={`slider round ${isDark ? "bg-gray-700" : "bg-gray-300"}`}
              ></span>
            </label>
            <span className="text-sm">{isDark ? "Dark Mode" : "Light Mode"}</span>
          </div>
        </div>
      </header>

      {/* Nav and Search */}
      <nav className={`pt-20 flex flex-col sm:flex-row items-center justify-around px-4 pb-4 ${isDark ? "bg-gray-900 text-white" : ""} transition-all duration-500`}>
        {/* Search Bar */}
        <div className="w-full sm:w-1/2 flex items-center mb-4 sm:mb-0">
          <input
            className={`px-4 h-10 rounded-full w-full border ${isDark ? "bg-gray-700 border-gray-500 text-white placeholder-gray-300" : "bg-white border-blue-400 text-gray-800"} focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-500`}
            id="searchBar"
            type="search"
            placeholder="Search Your Destination !!"
          />
          <button onClick={searchDestination} className="ml-2">
            <img
              className="h-6"
              src="https://purepng.com/public/uploads/large/search-icon-lob.png"
              alt="Search"
            />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center space-x-5 text-base">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li className="relative group">
            <span className="hover:underline cursor-pointer">Services</span>
            <div className={`absolute left-0 mt-2 w-48 ${isDark ? "bg-gray-700 text-white" : "bg-white text-black"} shadow-lg rounded-md z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500`}>
              <ul className="py-2 text-sm">
                <li><Link to="/services/electric" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Electric Service</Link></li>
                <li><Link to="/repair" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Electrical Services</Link></li>
                <li><Link to="/services/plumber" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Plumber Services</Link></li>
                <li><Link to="/services/furniture" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Furniture Services</Link></li>
                <li><Link to="/spasalon" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Spa & Salon</Link></li>
              </ul>
            </div>
          </li>
          <li><Link to="/about" className="hover:underline">About Us</Link></li>
          <li><Link to="/help" className="hover:underline">Help</Link></li>
         
          <Link to="/shop-dashboard" className="bg-blue-600 text-white px-4 py-2 rounded">Shop Dashboard</Link>
          {/* className="bg-blue-600 text-white px-4 py-2 rounded" */}
        
          
       
        </ul>
      </nav>
    </div>
  );
}
