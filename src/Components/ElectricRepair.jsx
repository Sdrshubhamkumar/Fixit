import React from 'react';

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
                        img: "assest/shubham-electronics.webp",
                    },
                    ...Array(4).fill({
                        name: "Dheeraj Electronics",
                        address: "Shop No. 2, Near SBI Bank, Kalyanpur, Kanpur",
                        phone: "0987654321",
                        img: "assest/dheeraj-shop.avif",
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
                        img: "assest/ac-repair.jpg",
                        link: "/requestform",
                    },
                    {
                        title: "Washing machine",
                        shop: "Shubham Electronics",
                        img: "assest/washing-machine.webp",
                    },
                    {
                        title: "Cooler",
                        shop: "Dheeraj Electronics",
                        img: "assest/cooler-repair.jpg",
                    },
                    {
                        title: "Refrigerator",
                        shop: "Dheeraj Electronics",
                        img: "assest/refrigerator-repair.jpg",
                    },
                    {
                        title: "Oven",
                        shop: "Dheeraj Electronics",
                        img: "assest/oven-repair.avif",
                    },
                    {
                        title: "Geyser",
                        shop: "Shubham Electronics",
                        img: "assest/geyser-repair.jpg",
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

        <footer className="bg-gray-200 mt-10 py-6">
            <h1 className="text-2xl font-bold text-center mb-4">FIXIT</h1>
            <div className="flex flex-wrap justify-around px-4 text-sm">
                <div className="space-y-2">
                    <h3 className="font-semibold">Company</h3>
                    <div className="space-x-1">
                        <a href="#">About Us |</a>
                        <a href="#">Terms & Conditions |</a>
                        <a href="#">Privacy Policy |</a>
                        <a href="#">Careers</a>
                    </div>
                </div>
                <div className="space-y-2">
                    <h3 className="font-semibold">For Customers</h3>
                    <div className="space-x-1">
                        <a href="#">Blog |</a>
                        <a href="#">Reviews |</a>
                        <a href="#">Contact Us</a>
                    </div>
                </div>
                <div className="space-y-2">
                    <h3 className="font-semibold">Social Links</h3>
                    <div className="flex space-x-3">
                        <a href="#"><i className="fab fa-youtube text-black text-xl" /></a>
                        <a href="#"><i className="fab fa-instagram text-black text-lg" /></a>
                        <a href="#"><i className="fab fa-x-twitter text-black text-lg" /></a>
                        <a href="#"><i className="fab fa-facebook-square text-black text-lg" /></a>
                    </div>
                </div>
            </div>
        </footer>
    </section>
);
};

export default ElectricalRepair;
