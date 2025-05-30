import React, { useEffect, useState } from 'react';

import img1 from '../assets/img1.avif';
import img2 from '../assets/img2.avif';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.avif';
import img5 from '../assets/img5.jpg';
import men1 from '../assets/men1.avif';
import men2 from '../assets/men2.avif';
import men3 from '../assets/men3.avif';

const HomeCarousel = () => {
  const images = [img1, img2, img3, img4, img5, men1, men2, men3];
  const duplicatedImages = [...images, ...images];
  const [offset, setOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const imageWidth = 160; // Adjusted for better responsiveness

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => prevOffset + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (offset >= images.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setOffset(0);
      }, 500);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 600);
    }
  }, [offset, images.length]);

  return (
    <div className="relative w-full overflow-hidden px-2 py-8">
      <div
        className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''} space-x-4`}
        style={{ transform: `translateX(-${offset * imageWidth}px)` }}
      >
        {duplicatedImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Spa ${i}`}
            className="rounded shadow-md w-[140px] sm:w-[160px] md:w-[200px] lg:w-[240px] h-[100px] sm:h-[120px] md:h-[150px] lg:h-[180px] object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => setOffset((prev) => (prev === 0 ? 0 : prev - 1))}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-60 p-2 rounded-full text-xl"
      >
        {'<'}
      </button>
      <button
        onClick={() => setOffset((prev) => prev + 1)}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-60 p-2 rounded-full text-xl"
      >
        {'>'}
      </button>
    </div>
  );
};

export default HomeCarousel;
