import React, { useState, useEffect } from 'react';

const SpaSalon = () => {
  const images = [
    'assest/img5.jpg',
    'assest/img1.avif',
    'assest/img2.avif',
    'assest/img3.jpg',
    'assest/img4.avif',
    'assest/img4.jpg',
    'assest/img6.avif',
  ];
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
    <section className="relative font-poppins min-h-screen w-full overflow-auto bg-gray-100">
      {/* Header */}
      <h1 className="text-white text-4xl text-center font-bold py-6 bg-gradient-to-r from-pink-500 to-red-500">Spa-Saloon For Men & Women</h1>

      {/* Banner */}
      <div className="relative w-full h-[55vh] px-10">
        <img src={images[index]} alt="Banner" className="w-full h-full object-cover rounded-md" />
        <button onClick={handlePrev} className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200">&#60;</button>
        <button onClick={handleNext} className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200">&#62;</button>
      </div>

      {/* Women Spa */}
      <h2 className="text-center text-2xl font-semibold mt-10 text-pink-600">Spa for Women</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
        {[
          'womenspa01.avif', 'womenspa2.avif', 'womenspa6.avif', 'womenspa2.jpg',
          'womensalon3.avif', 'womenspa6.avif', 'womenspa01.avif', 'womenspa4.jpg',
          'womenspa3.jpg', 'womenspa5.jpg', 'womenspa01.avif'
        ].map((src, i) => (
          <img key={i} src={`assest/${src}`} alt="Spa" className="rounded shadow-lg" />
        ))}
      </div>

      {/* Women Salon */}
      <h2 className="text-center text-2xl font-semibold text-pink-600">Salon for Women</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
        {['womensalon2.avif', 'womensalon3.avif', 'womensalon4.avif', 'womensalon5.jpg'].map((src, i) => (
          <img key={i} src={`assest/${src}`} alt="Salon" className="rounded shadow-lg" />
        ))}
      </div>

      {/* Nearest Shop (Women) */}
      <h2 className="text-center text-2xl font-semibold text-purple-600">Your Nearest Shop</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {[
          { img: 'womenshop.jpeg', name: 'Sparks' },
          { img: 'womenshop2.jpeg', name: 'Grace' },
          { img: 'womenshop4.jpeg', name: 'Harry Chandigarh' },
          { img: 'womenshop5.jpeg', name: 'Hair salon' }
        ].map((shop, i) => (
          <div key={i} className="bg-white p-4 rounded shadow-lg text-center">
            <img src={`assest/${shop.img}`} alt={shop.name} className="w-full h-40 object-cover rounded" />
            <h2 className="mt-2 font-bold">{shop.name}<br />Unisex Salon</h2>
            <a href="booking.html" className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Book Now</a>
          </div>
        ))}
      </div>

      {/* Massage for Men */}
      <h2 className="text-center text-2xl font-semibold mt-10 text-blue-600">Massage for Men</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
        {[
          'men1.avif', 'men2.avif', 'men3.avif', 'men4.avif',
          'men5.avif', 'men6.avif', 'men7.avif', 'men8.avif',
          'men1.avif', 'men2.avif', 'men4.avif'
        ].map((src, i) => (
          <img key={i} src={`assest/${src}`} alt="Men Massage" className="rounded shadow-lg" />
        ))}
      </div>

      {/* Men Salon */}
      <h2 className="text-center text-2xl font-semibold text-blue-600">Salon for Men</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
        {['salon1.avif', 'salon2.avif', 'salon3.jpg', 'salon4.jpg'].map((src, i) => (
          <img key={i} src={`assest/${src}`} alt="Men Salon" className="rounded shadow-lg" />
        ))}
      </div>

      {/* Nearest Shop (Men) */}
      <h2 className="text-center text-2xl font-semibold text-purple-600">Your Nearest Shop</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {[
          { img: 'shop1.jpeg', name: 'Skkizzars' },
          { img: 'shop2.jpeg', name: 'Tamanna' },
          { img: 'shop3.jpeg', name: 'Tamanna' },
          { img: 'shop4.jpeg', name: 'Salon' }
        ].map((shop, i) => (
          <div key={i} className="bg-white p-4 rounded shadow-lg text-center">
            <img src={`assest/${shop.img}`} alt={shop.name} className="w-full h-40 object-cover rounded" />
            <h2 className="mt-2 font-bold">{shop.name}<br />Unisex Salon</h2>
            <a href="booking.html" className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Book Now</a>
          </div>
        ))}
      </div>

    
    </section>
  );
};

export default SpaSalon;
