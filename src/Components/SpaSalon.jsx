import React, { useState, useEffect } from 'react';
import img1 from '../assets/img1.avif';
import img2 from '../assets/img2.avif';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.avif';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.avif';
import womenspa01 from '../assets/womenspa01.avif';
// import womenspa2 from '../assets/womenspa2.avif'; // File not found, commented out
import womenspa6 from '../assets/womenspa6.avif';
import womenspa2Jpg from '../assets/womenspa2.jpg';
import womensalon3 from '../assets/womensalon3.avif';
import womenspa4 from '../assets/womenspa4.jpg';
import womenspa3 from '../assets/womenspa3.jpg';
import womenspa5 from '../assets/womenspa5.jpg';
import womensalon2 from '../assets/womensalon2.avif';
import womensalon4 from '../assets/womensalon4.avif';
import womensalon5 from '../assets/womensalon5.jpg';
import womenshop from '../assets/womenshop.jpeg';
import womenshop2 from '../assets/womenshop2.jpeg';
import womenshop4 from '../assets/womenshop4.jpeg';
import womenshop5 from '../assets/womenshop5.jpeg';
import men1 from '../assets/men1.avif';
import men2 from '../assets/men2.avif';
import men3 from '../assets/men3.avif';
import men4 from '../assets/men4.avif';
import men5 from '../assets/men5.avif';
import men6 from '../assets/men6.avif';
import men7 from '../assets/men7.avif';
import men8 from '../assets/men8.avif';
import salon1 from '../assets/salon1.avif';
import salon2 from '../assets/salon2.avif';
import salon3 from '../assets/salon3.jpg';
import salon4 from '../assets/salon4.jpg';
import shop1 from '../assets/shop1.jpeg';
import shop2 from '../assets/shop2.jpeg';
import shop3 from '../assets/shop3.jpeg';
import shop4 from '../assets/shop4.jpeg';

const SpaSalon = () => {
  const images = [img5, img1, img2, img3, img4, img6];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative w-full font-[Poppins] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center brightness-75 blur-sm -z-10"
            style={{ backgroundImage: `url('https://img.freepik.com/free-photo/attractive-african-woman-enjoying-face-massage-spa-salon_176420-13955.jpg')` }}
        ></div>

<h1 className="text-4xl md:text-5xl font-semibold text-white mb-6 text-center mt-10">
  Spa & Salon Services </h1>

      {/* Banner */}
      <div className="relative w-full h-[55vh] px-10">
        <img src={images[index]} alt="Banner" className="w-full h-full object-cover rounded-md " />
        <button onClick={handlePrev} className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200">&#60;</button>
        <button onClick={handleNext} className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200">&#62;</button>
      </div>

     {/* Women Spa */}
<h2 className="text-center text-4xl font-semibold mt-10 mb-5 text-white">
  Spa for Women
</h2>
<div className="flex overflow-x-auto space-x-5 px-4 pb-5 scrollbar-thin scrollbar-thumb-pink-300">
  {[
    womenspa01,
    womenspa6,
    womenspa2Jpg,
    womensalon3,
    womenspa6,
    womenspa01,
    womenspa4,
    womenspa3,
    womenspa5,
    womenspa01,
  ].map((src, i) => (
    <img
      key={i}
      src={src}
      alt={`Spa ${i}`}
      className="rounded shadow-lg w-74 h-50 object-cover flex-shrink-0"
    />
  ))}
</div>


      {/* Women Salon */}
      <h2 className="text-center text-4xl font-semibold mt-10  text-white">Salon for Women</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
        {[womensalon2, womensalon3, womensalon4, womensalon5].map((src, i) => (
          <img key={i} src={src} alt="Salon" className="rounded shadow-lg" />
        ))}
      </div>

      {/* Nearest Shop (Women) */}
      <h2 className="text-center text-4xl font-semibold mt-10 text-white">Your Nearest Shop</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {[{ img: womenshop, name: 'Sparks' }, { img: womenshop2, name: 'Grace' }, { img: womenshop4, name: 'Harry Chandigarh' }, { img: womenshop5, name: 'Hair salon' }].map((shop, i) => (
          <div key={i} className="bg-white p-4 rounded shadow-lg text-center">
            <img src={shop.img} alt={shop.name} className="w-full h-40 object-cover rounded" />
            <h2 className="mt-2 font-bold">{shop.name}<br />Unisex Salon</h2>
            <a href="booking.html" className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Book Now</a>
          </div>
        ))}
      </div>

     {/* Massage for Men */}
<h2 className="text-center text-4xl font-semibold mt-10 mb-5 text-white">
  Massage for Men
</h2>
<div className="flex overflow-x-auto space-x-4 px-4 pb-4 scrollbar-thin scrollbar-thumb-blue-300">
  {[
    men1,
    men2,
    men3,
    men4,
    men5,
    men6,
    men7,
    men8,
    men1,
    men2,
    men4,
  ].map((src, i) => (
    <img
      key={i}
      src={src}
      alt={`Men Massage ${i}`}
      className="rounded shadow-lg w-74 h-50 object-cover flex-shrink-0"
    />
  ))}
</div>


{/* Men Salon */}
<h2 className="text-center text-4xl font-semibold text-white mt-10">Salon for Men</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
  {[salon1, salon2, salon3, salon4].map((src, i) => (
    <img
      key={i}
      src={src}
      alt="Men Salon"
      className="rounded shadow-lg w-full h-58 object-cover"
    />
  ))}
</div>




      {/* Nearest Shop (Men) */}
      <h2 className="text-center text-4xl font-semibold text-white">Your Nearest Shop</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {[{ img: shop1, name: 'Skkizzars' }, { img: shop2, name: 'Tamanna' }, { img: shop3, name: 'Tamanna' }, { img: shop4, name: 'Salon' }].map((shop, i) => (
          <div key={i} className="bg-white p-4 rounded shadow-lg text-center">
            <img src={shop.img} alt={shop.name} className="w-full h-40 object-cover rounded" />
            <h2 className="mt-2 font-bold">{shop.name}<br />Unisex Salon</h2>
            <a href="booking.html" className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Book Now</a>
          </div>
        ))}
      </div>

    </section>
  );
};

export default SpaSalon;
