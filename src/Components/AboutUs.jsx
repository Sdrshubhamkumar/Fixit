// AboutUs.jsx
import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div id="box1" className="max-w-3xl bg-white p-8 rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4 text-center">About Us</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to <span className="font-bold text-blue-600">FIXIT</span>, your trusted partner for reliable and high-quality home services. 
          Whether it's plumbing, electrical work, carpentry, or appliance repair – we connect you with trained professionals 
          who get the job done right. Our mission is to make home maintenance effortless, reliable, and accessible.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">Why Choose FIXIT?</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li><span className="text-green-600 font-bold">✔</span> Verified and skilled professionals</li>
          <li><span className="text-green-600 font-bold">✔</span> Transparent pricing with no hidden costs</li>
          <li><span className="text-green-600 font-bold">✔</span> Convenient online booking system</li>
          <li><span className="text-green-600 font-bold">✔</span> Quick response time and efficient service</li>
          <li><span className="text-green-600 font-bold">✔</span> 100% customer satisfaction guarantee</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">Our Vision</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          We envision a future where finding reliable help for any household need is just a click away. FIXIT is not 
          just a service – it’s a solution to your everyday problems. With technology and a dedicated support team, 
          we ensure your peace of mind, one service at a time.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">Join Our Community</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Thousands of satisfied customers have already made FIXIT their go-to choice for home services. 
          We invite you to experience the convenience, reliability, and care that our services bring to your doorstep.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
