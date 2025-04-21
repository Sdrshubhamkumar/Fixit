import React from "react";
import img1 from "../assets/img1.avif";
import img2 from "../assets/img2.avif";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import Cleaning from "../assets/cleaning.jpg";
import Repair from "../assets/repair.webp";
import { Link } from "react-router-dom";

export default function FixitHomePage() {
    return (
        <div className="relative flex flex-col z-[-1]">

            {/* ✅ Background Blur Image Layer */}
            <div
                className="absolute inset-0 bg-cover bg-center filter blur-sm brightness-90 z-[-1]"
                style={{ backgroundImage: `url('https://homecareanandfacilities.com/wp-content/uploads/2019/12/home-deep-cleaning-870x500.jpg')` }}
            ></div>

            {/* Section: About Us & Image Grid */}
            <section id="section1" className="flex flex-wrap justify-between p-4">
                
                <div id="box2" className="grid gap-2 grid-cols-2 md:grid-cols-3 bg-white/70 rounded-xl shadow-lg p-2">
                    <img src={img1} alt="Fix" className="w-full h-auto" />
                    <img src={img2} alt="Plumbing" className="w-full h-auto" />
                    <img src={img3} alt="Lock Repair" className="w-full h-auto" />
                    <img src={img4} alt="Cleaning" className="w-full h-auto" />
                    <img src={img4} alt="Cleaning" className="w-full h-auto" />
                    <img src={img4} alt="Cleaning" className="w-full h-auto" />
                </div>
            </section>

            {/* Section: Our Services */}
            <h1 className="text-2xl text-center font-bold my-4">Our Services</h1>
            <div className="flex flex-wrap justify-around bg-cover bg-fixed" style={{ backgroundImage: `url('/img/backImage.jpg')` }}>
                {[
                    { img: Cleaning, title: "Cleaning", link: "clean.html" },
                    { img: Repair, title: "Repairing", link: "/repair" },
                    { img: img1, title: "Spa", link: "/spasalon" },
                ].map((service, index) => (
                    <div key={index} className="flex flex-col items-center p-4 m-4 bg-blue-200 rounded-lg shadow-lg transition-transform hover:scale-105">
                        <img src={service.img} alt={service.title} className="w-72 h-36 object-cover shadow-xl" />
                        <h3 className="text-xl mt-2">{service.title}</h3>
                        {service.link.startsWith("/") ? (
                            <Link to={service.link} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">
                                Book Now now
                            </Link>
                        ) : (
                            <a href={service.link} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">
                                Book Now
                            </a>
                        )}
                    </div>
                ))}
            </div>

            {/* Section: Other Services */}
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
        </div>
    );
}
