// src/components/Footer.jsx
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-200 p-4 ">
            <h1 className="text-center text-xl font-bold">FIXIT</h1>
            <div className="flex flex-wrap justify-around mt-4">
                <div>
                    <h3 className="font-semibold">Company</h3>
                    <a href="#" className="block">About Us | Terms & Conditions | Privacy policy | Careers</a>
                </div>
                <div>
                    <h3 className="font-semibold">For Customers</h3>
                    <a href="#" className="block">Blog | Reviews | Contact Us</a>
                </div>
                <div>
                    <h3 className="font-semibold">Social Links</h3>
                    <div className="flex gap-4">
                        <a href="#"><i className="fab fa-youtube text-xl"></i></a>
                        <a href="#"><i className="fab fa-instagram text-xl"></i></a>
                        <a href="#"><i className="fab fa-x-twitter text-xl"></i></a>
                        <a href="#"><i className="fab fa-facebook-square text-xl"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
