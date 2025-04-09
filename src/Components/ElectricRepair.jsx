import React from 'react';
import shubhamElectronicsImg from '../assets/shubham-electronics.webp';
import dheerajShopImg from '../assets/dheeraj-shop.avif';
import acRepairImg from '../assets/ac-repair.jpg';
import washingMachineImg from '../assets/washing-machine.webp';
import coolerRepairImg from '../assets/cooler-repair.jpg';
import refrigeratorRepairImg from '../assets/refrigerator-repair.jpg';
import ovenRepairImg from '../assets/oven-repair.avif';
import geyserRepairImg from '../assets/geyser-repair.jpg';


const ElectricalRepair = () => {
return (
    <section className="relative w-full font-[Poppins] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center brightness-75 blur-sm -z-10"
            style={{ backgroundImage: `url('https://static-assets.business.amazon.com/assets/in/24th-jan/705_Website_Blog_Appliances_1450x664.jpg.transform/1450x664/image.jpg')` }}
        ></div>

        <div className="mt-4 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-700 mb-6">
                Your nearest electrical shop
            </h1>

            <ul className="flex flex-wrap justify-center gap-4">
                {[
                    {
                        name: "Shubham Electronics",
                        address: "Shop No. 1, Near SBI Bank, Kalyanpur, Kanpur",
                        phone: "0987654321",
                        img: shubhamElectronicsImg,
                    },
                    ...Array(4).fill({
                        name: "Dheeraj Electronics",
                        address: "Shop No. 2, Near SBI Bank, Kalyanpur, Kanpur",
                        phone: "0987654321",
                        img:  dheerajShopImg,
                    }),
                ].map((shop, index) => (
                    <li
                        key={index}
                        className="bg-gray-100 p-4 rounded-md w-80 transition-transform hover:scale-105"
                    >
                        <div className="flex gap-4 items-start">
                            <img
                                src={shop.img}
                                alt="Electrical Appliance Repair"
                                className="w-28 rounded-md"
                            />
                            <div>
                                <h3 className="font-semibold text-lg">{shop.name}</h3>
                                <div className="text-sm">
                                    Address: {shop.address} <br /> Phone: {shop.phone}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

        <div className="my-10 text-center">
            <h2 className="text-3xl text-gray-700 mb-6">Quick home repair</h2>

            <div className="flex flex-wrap justify-center gap-6 px-4">
                {[
                    {
                        title: "AC services",
                        shop: "Shubham Electronics",
                        img: acRepairImg ,
                        link: "/requestform",
                    },
                    {
                        title: "Washing machine",
                        shop: "Shubham Electronics",
                        img: washingMachineImg,
                    },
                    {
                        title: "Cooler",
                        shop: "Dheeraj Electronics",
                        img: coolerRepairImg,
                    },
                    {
                        title: "Refrigerator",
                        shop: "Dheeraj Electronics",
                        img: refrigeratorRepairImg,
                    },
                    {
                        title: "Oven",
                        shop: "Dheeraj Electronics",
                        img: ovenRepairImg,
                    },
                    {
                        title: "Geyser",
                        shop: "Shubham Electronics",
                        img: geyserRepairImg,
                    },
                ].map((service, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 rounded-lg w-72 h-[350px] text-center shadow-lg hover:shadow-xl transition-transform hover:scale-105"
                    >
                        <img
                            src={service.img}
                            alt={service.title}
                            className="w-full h-[60%] rounded-t-lg object-cover"
                        />
                        <h2 className="text-xl font-semibold mt-2">{service.title}</h2>
                        <p className="px-2 text-sm mt-1">
                            <b>{service.shop}</b> is a leading {service.title.toLowerCase()} repair service provider.
                        </p>
                        <a
                            href={service.link || "#"}
                            className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
                        >
                            Book Now
                        </a>
                    </div>
                ))}
            </div>
        </div>

       
    </section>
);
};

export default ElectricalRepair;
