import React from "react";

const AboutUs = (props) => {
  const isDark = props.mode === 'dark';

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 py-10 ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div id="box1" className={`max-w-3xl p-8 rounded-2xl shadow-2xl ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <h1 className={`text-4xl font-extrabold mb-4 text-center ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>
          About Us
        </h1>

        <p className="text-lg leading-relaxed">
          Welcome to <span className={`font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>FIXIT</span>, your trusted partner for reliable and high-quality home services. 
          Whether it's plumbing, electrical work, carpentry, or appliance repair – we connect you with trained professionals 
          who get the job done right. Our mission is to make home maintenance effortless, reliable, and accessible.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Why Choose FIXIT?</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><span className="text-green-500 font-bold">✔</span> Verified and skilled professionals</li>
          <li><span className="text-green-500 font-bold">✔</span> Transparent pricing with no hidden costs</li>
          <li><span className="text-green-500 font-bold">✔</span> Convenient online booking system</li>
          <li><span className="text-green-500 font-bold">✔</span> Quick response time and efficient service</li>
          <li><span className="text-green-500 font-bold">✔</span> 100% customer satisfaction guarantee</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Our Vision</h2>
        <p className="text-lg leading-relaxed">
          We envision a future where finding reliable help for any household need is just a click away. FIXIT is not 
          just a service – it’s a solution to your everyday problems. With technology and a dedicated support team, 
          we ensure your peace of mind, one service at a time.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Join Our Community</h2>
        <p className="text-lg leading-relaxed">
          Thousands of satisfied customers have already made FIXIT their go-to choice for home services. 
          We invite you to experience the convenience, reliability, and care that our services bring to your doorstep.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
