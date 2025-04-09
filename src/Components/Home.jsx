import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/img1.avif";
import img2 from "../assets/img2.avif";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import Cleaning from "../assets/cleaning.jpg";
import Repair from "../assets/repair.webp";

export default function FixitHomePage() {
    return (
        <div className="bg-blue-100 flex flex-col">
            <header className="bg-indigo-200 flex items-center justify-around px-4 fixed top-0 w-full z-10">
                <h1 className="text-xl font-bold">FIXIT</h1>
                <button className="bg-white px-4 py-1 rounded-md shadow">
                    <Link to="login">Login or signup</Link>
                </button>
            </header>

            <nav className="pt-20 flex items-center justify-around">
                <div className="w-1/2 flex items-center">
                    <input
                        className="px-4 h-9 rounded-full border border-blue-400 bg-white"
                        id="searchBar"
                        type="search"
                        placeholder="Search Your Destination !!"
                    />
                    <button onClick={() => searchDestination()} className="ml-2">
                        <img
                            className="h-6"
                            src="https://purepng.com/public/uploads/large/search-icon-lob.png"
                            alt="search"
                        />
                    </button>
                </div>
                <div className="hidden sm:block">
                    <ul className="flex list-none justify-center">
                        <li className="px-5">
                            <a href="#Home" className="text-lg">Home</a>
                        </li>
                        <li className="px-5">
                            <a href="#">Setting</a>
                        </li>
                        <li className="px-5">
                            <a href="#box1">About Us</a>
                        </li>
                        <li className="px-5">
                            <a href="#">Help</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <section id="section1" className="flex flex-wrap justify-between p-4 bg-fixed bg-no-repeat" style={{ backgroundImage: `url('/img/home.jpg')` }}>
                <div id="box1" className="p-4">
                    <h1 className="text-2xl font-bold">About Us</h1>
                    <p className="mt-2">
                        Welcome to <b>FIXIT</b>, your trusted partner for reliable and high-quality home services. We are dedicated to making home maintenance and improvement effortless by connecting you with skilled professionals for a wide range of services.
                    </p>
                    <h1 className="text-xl font-semibold mt-4">Why Choose Us?</h1>
                    <ul className="list-disc ml-5 mt-2">
                        <li>✔ Verified and skilled professionals</li>
                        <li>✔ Transparent pricing with no hidden costs</li>
                        <li>✔ Convenient online booking</li>
                        <li>✔ Customer satisfaction guarantee</li>
                        <li>✔ Quick and efficient service</li>
                    </ul>
                </div>
                <div id="box2" className="grid gap-2 grid-cols-2 md:grid-cols-3">
                    <img src={img1} alt="Fix" className="w-full h-auto" />
                    <img src={img2} alt="Plumbing" className="w-full h-auto" />
                    <img src={img3} alt="Lock Repair" className="w-full h-auto" />
                    <img src={img4} alt="Cleaning" className="w-full h-auto" />
                    <img src={img4} alt="Cleaning" className="w-full h-auto" />
                    <img src={img4} alt="Cleaning" className="w-full h-auto" />
                </div>
            </section>

            <h1 className="text-2xl text-center font-bold my-4">Our Services</h1>
            <div className="flex flex-wrap justify-around bg-cover bg-fixed" style={{ backgroundImage: `url('/img/backImage.jpg')` }}>
                {[
                    { img: Cleaning, title: "Cleaning", link: "clean.html" },
                    { img: Repair, title: "Repairing", link: "/repair" }, // React route
                    { img: img1, title: "Spa", link: "/spasalon" }, // Updated React route
                ].map((service, index) => (
                    <div key={index} className="flex flex-col items-center p-4 m-4 bg-blue-200 rounded-lg shadow-lg transition-transform hover:scale-105">
                        <img src={service.img} alt={service.title} className="w-72 h-36 object-cover shadow-xl" />
                        <h3 className="text-xl mt-2">{service.title}</h3>
                        {service.link.startsWith("/") ? (
                            <Link to={service.link} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">
                                Book Now
                            </Link>
                        ) : (
                            <a href={service.link} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">
                                Book Now
                            </a>
                        )}
                    </div>
                ))}
            </div>

            <h1 className="text-2xl text-center font-bold my-4">OTHER Services</h1>
            <div className="flex flex-wrap justify-around bg-fixed bg-center bg-no-repeat bg-cover p-8" style={{ backgroundImage: `url('/img/room.jpg')` }}>
                {[
                    { title: "Electricity", link: "form.html" },
                    { title: "Pests Control", link: "form.html" },
                    { title: "Car Wash", link: "form.html" },
                    { title: "Others", link: "Repair.html" },
                ].map((other, index) => (
                    <div key={index} className="m-4 p-6 bg-yellow-200 border border-gray-700 rounded-lg shadow-lg transition-transform hover:scale-105">
                        <h1 className="text-xl font-semibold"><a href={other.link}>{other.title}</a></h1>
                    </div>
                ))}
            </div>

            <footer className="bg-gray-200 p-4 mt-4">
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
        </div>
    );
}

function searchDestination() {
    const value = document.getElementById("searchBar")?.value;
    alert(`Searching for: ${value}`);
}
