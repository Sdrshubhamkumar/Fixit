import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"; // Importing Facebook icon from react-icons

export default function Footer({ mode }) {
    const isDark = mode === "dark";

    return (
        <footer className={`${isDark ? "bg-[url('/public/videos/background_video.gif')] text-white" : "bg-gray-200 text-gray-800"} p-4 transition-all duration-500`}>
            <h1 className="text-center text-xl font-bold">CASASWIFT</h1>
            <div className="flex flex-wrap justify-around mt-4">
                <div className="flex-col text-center">
                    <h3 className="font-semibold">Quick Links</h3>
                    <Link to="/about" className="hover:underline">About Us</Link>
                    <a href="#" className={`${isDark ? "text-gray-400" : "text-gray-700"} block hover:underline`}>Terms & Conditions</a>
                    <a href="#" className={`${isDark ? "text-gray-400" : "text-gray-700"} block hover:underline`}>Privacy Policy</a>
                    <a href="#" className={`${isDark ? "text-gray-400" : "text-gray-700"} block hover:underline`}>Careers</a>
                </div>
                <div className="flex-col text-center">
                    <h3 className="font-semibold">For Customers</h3>
                    <a href="#" className={`${isDark ? "text-gray-400" : "text-gray-700"} block hover:underline`}>Blog</a>
                    <Link to="/review" className="hover:underline">Reviews</Link>
                    <a href="#" className={`${isDark ? "text-gray-400" : "text-gray-700"} block hover:underline`}>Contact Us</a>
                </div>
                <div>
                    <h3 className="font-semibold">Social Links</h3>
                    <div className="flex flex-col items-center gap-2 mt-2">
                        <a href="#" className={`${isDark ? "text-gray-400" : "text-gray-700"} hover:text-red-500`}>
                        <FaFacebook className="text-2xl text-blue-600 hover:text-blue-800" />
                        </a>
                        <a href="#" className={`${isDark ? "text-gray-400" : "text-gray-700"} hover:text-pink-500`}>
                        <FaTwitter className="hover:text-blue-400" />
                        </a>
                        <a href="#" className={`${isDark ? "text-gray-400" : "text-gray-700"} hover:text-blue-500`}>
                        <FaInstagram className="hover:text-pink-500" />
                        </a>
                        <a href="#" className={`${isDark ? "text-gray-400" : "text-gray-700"} hover:text-blue-600`}>
                        <FaLinkedin className="hover:text-blue-700" />
                        </a>
                        <a href="#" className={`${isDark ? "text-gray-400" : "text-gray-700"} hover:text-blue-600`}>
                        <FaGithub className="hover:text-black" />
                        </a>
                       
                    </div>
                </div>
            </div>
        </footer>
    );
}
