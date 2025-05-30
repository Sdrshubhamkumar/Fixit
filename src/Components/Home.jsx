import React from "react";
import img1 from "../assets/img1.avif";
// import img2 from "../assets/img2.avif";
// import img3 from "../assets/img3.jpg";
// import img4 from "../assets/img4.jpg";
// import img5 from "../assets/img5.jpg";
// import img6 from "../assets/img6.avif";
import HomeCarousel from './HomeCarousel';
import Cleaning from "../assets/cleaning.jpg";
import Repair from "../assets/repair.webp";
import { Link } from "react-router-dom";
import { FaBolt, FaBug, FaCar, FaAngleDoubleRight } from 'react-icons/fa'; // example: lightning bolt for Electricity




export default function FixitHomePage() {
    return (
        <div className="relative flex flex-col">

           
             <div
      className="grid gap-4 p-6"
      style={{
        display: "grid",
        gridTemplateAreas: `
          "header sidebar sidebar"
          "footer footer main"
        `,
       
        height: "80vh",
      }}
    >
      <div className="bg-[url('/public/videos/casalogo.gif')] bg-no-repeat bg-cover bg-center text-white p-4" style={{ gridArea: "header" }}>

      </div>
      <div className="bg-[url('./assets/tools1.jpg')] bg-no-repeat bg-cover bg-center text-white p-4" style={{ gridArea: "sidebar" }}>
       
      </div>
      <div className="bg-[url('/public/videos/service.webp')] bg-no-repeat bg-cover bg-center text-black p-4" style={{ gridArea: "main" }}>

      </div>
      <div className="bg-[url('./assets/homeservice.jpg')] bg-no-repeat bg-cover bg-center" style={{ gridArea: "footer" }}>
      </div>
    </div>

            {/* Section: About Us & Image Grid */}  
            <section id="section1" className="flex flex-wrap justify-between p-4 ">
                
                
            </section>

            {/* Section: Our Services */}
            <h1 className="text-4xl text-center font-bold my-4">Our Services</h1>
            <div className="flex flex-wrap justify-around bg-cover bg-fixed" style={{ backgroundImage: `url('/img/backImage.jpg')` }}>
                {[
                    { img: Cleaning, title: "Cleaning", link: "/cleaning" },
                    { img: Repair, title: "Repairing", link: "/repair" },
                    { img: img1, title: "Spa", link: "/spasalon" },
                ].map((service, index) => (
                    <div key={index} className="flex flex-col items-center p-4 m-4 bg-[url('/public/videos/light_back_video.gif')] rounded-lg shadow-2xl transition-transform hover:scale-105">
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
            {/* Section: Home Carousel */}
            <h1 className="text-4xl text-center font-bold my-4 mt-20">Spa&Salon Services</h1>
                <HomeCarousel />

            {/* Section: Other Services */}
            <h1 className="text-4xl text-center font-bold my-4">Other Services</h1>
            <div className="flex flex-wrap justify-around bg-fixed bg-center bg-no-repeat bg-cover p-8" style={{ backgroundImage: `url('/img/room.jpg')` }}>
                {[
                    { title: "Electricity", link: "Electricity-service", icon: <FaBolt /> },
                    { title: "Pests Control", link: "Pests Control", icon: <FaBug />  },
                    { title: "Car Wash", link: "/car-wash-services", icon: <FaCar /> },
                    { title: "More", link: "/repair", icon: <FaAngleDoubleRight /> },
                ].map((other, index) => (
                    <div key={index} className="w-60 m-4 p-6 bg-blue-300 border-gray-950 text-blue-900 rounded-lg shadow-2xl transition-transform hover:scale-105">
                         {other.icon && <div className="text-4xl text-blue-800 mb-2 flex justify-center">{other.icon}</div>}
                        <h1 className="text-xl font-semibold text-center"><a href={other.link}>{other.title}</a></h1>
                    </div>
                ))}
            </div>
          
        </div>
       
    );
    
    
}

