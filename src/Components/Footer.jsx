import React from "react";

export default function Footer({ mode }) {
    const isDark = mode === "dark";

    return (
        <footer className={`${isDark ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"} p-4 transition-all duration-500`}>
            <h1 className="text-center text-xl font-bold">FIXIT</h1>
            <div className="flex flex-wrap justify-around mt-4">
                <div>
                    <h3 className="font-semibold">Quick Links</h3>
                    <a href="#" className={`${isDark ? "text-gray-400" : "text-gray-700"} block hover:underline`}>About Us | Terms & Conditions | Privacy Policy | Careers</a>
                </div>
                <div>
                    <h3 className="font-semibold">For Customers</h3>
                    <a href="#" className={`${isDark ? "text-gray-400" : "text-gray-700"} block hover:underline`}>Blog | Reviews | Contact Us</a>
                </div>
                <div>
                    <h3 className="font-semibold">Social Links</h3>
                    <div className="flex gap-4">
                        <a href="#" className={`${isDark ? "text-gray-400" : "text-gray-700"} hover:text-red-500`}>
                            <i className="fab fa-youtube text-xl"></i>
                        </a>
                        <a href="#" className={`${isDark ? "text-gray-400" : "text-gray-700"} hover:text-pink-500`}>
                            <i className="fab fa-instagram text-xl"></i>
                        </a>
                        <a href="#" className={`${isDark ? "text-gray-400" : "text-gray-700"} hover:text-blue-500`}>
                            <i className="fab fa-x-twitter text-xl"></i>
                        </a>
                        <a href="#" className={`${isDark ? "text-gray-400" : "text-gray-700"} hover:text-blue-600`}>
                            <i className="fab fa-facebook-square text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
