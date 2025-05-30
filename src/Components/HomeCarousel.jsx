import React, { useEffect, useRef, useState } from 'react';

import img1 from '../assets/img1.avif';
import img2 from '../assets/img2.avif';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.avif';
// import img4 from '../assets/CarouselImg/img4.jpg';
import img5 from '../assets/img5.jpg';
import men1 from '../assets/men1.avif';
import men2 from '../assets/men2.avif';
import men3 from '../assets/men3.avif';
// import subh4 from '../../assets/CarouselImg/subh4.jpg';
// import download from '../../assets/CarouselImg/download-3.png';
// import downloadd from '../../assets/CarouselImg/downloadd.jpg';
// import downnload from '../../assets/CarouselImg/downnload.png';
// import empower from '../../assets/CarouselImg/empower.jpg';
// import ford from '../../assets/CarouselImg/ford.jpg';
// import subh5 from '../../assets/CarouselImg/subh5.png';
// import godrej from '../../assets/CarouselImg/godrej.jpg';
// import IGSSS from '../../assets/CarouselImg/IGSSS-3.png';
// import image from '../../assets/CarouselImg/image.png';
// import images1 from '../../assets/CarouselImg/images-1.png';
// import images2 from '../../assets/CarouselImg/images2.png';
// import intas from '../../assets/CarouselImg/intas.jpg';

const HomeCarousel = () => {
  const images = [
   
    img1,
    img2,
    img3,
    img4,
    // img4
    img5,
    men1,
    men2,
    men3,
    // subh4,
    // download,
    // downloadd,
    // downnload,
    // empower,
    // ford,
    // subh5,
    // godrej,
    // IGSSS,
    // image,
    // images1,
    // images2,
    // intas
  ];

  const duplicatedImages = [...images, ...images]; // duplicate
  const [offset, setOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const containerRef = useRef(null);

  const imageWidth = 170; // 150px width + 20px gap

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => prevOffset + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (offset >= images.length) {
      setTimeout(() => {
        setIsTransitioning(false); // Remove transition for instant jump
        setOffset(0);
      }, 5000); // after animation completes

      // After instant jump, re-enable transition
      setTimeout(() => {
        setIsTransitioning(true);
      }, 1100);
    }
  }, [offset, images.length]);

  return (
    <div className="relative max-w-5xl mx-auto overflow-hidden px-8 py-20"> 
      <div
        ref={containerRef}
        className={`flex ${isTransitioning ? 'transition-transform duration-2000 ease-in-out' : ''} space-x-6`}
        style={{
          transform: `translateX(-${offset * imageWidth}px)`,
        }}
      >
        {duplicatedImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Spa ${i}`}
            className="rounded shadow-lg w-[250px] h-[200px] object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Left Button */}
      <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
        <button
          onClick={() => setOffset((prev) => (prev === 0 ? 0 : prev - 1))}
          className="text-black text-3xl bg-white bg-opacity-50 p-2 rounded-full"
        >
          {'<'}
        </button>
      </div>

      {/* Right Button */}
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 ">
        <button
          onClick={() => setOffset((prev) => prev + 1)}
          className="text-black text-3xl bg-white bg-opacity-50 p-2 rounded-full"
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default HomeCarousel;
