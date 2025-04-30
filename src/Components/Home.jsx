import React from "react";
import img1 from "../assets/img1.avif";
import img2 from "../assets/img2.avif";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.avif";
import Cleaning from "../assets/cleaning.jpg";
import Repair from "../assets/repair.webp";
import { Link } from "react-router-dom";


export default function FixitHomePage() {
    return (
        <div className="relative flex flex-col z-[-1] bg-[url('/public/videos/light_back_video.gif')] bg-no-repeat bg-center bg-cover">

            {/* ✅ Background Blur Image Layer */}
            <div
                className="absolute inset-0 bg-cover bg-center filter blur-sm brightness-90 z-[-1]"
            
            ></div>

            {/* Section: About Us & Image Grid */}  
            <section id="section1" className="flex flex-wrap justify-between p-4 ">
                
                <div id="box2" className="w-full h-[60vh] bg-no-repeat bg-center bg-cover z-[-1]"
                style={{ backgroundImage: "url('/public/videos/service.webp')" }}>
                   <div><h1 className="transition-transform duration-500 hover:translate-x-4 text-black text-9xl text-center font-serif">
    CASASWIFT
</h1>
                  
                   </div>
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
