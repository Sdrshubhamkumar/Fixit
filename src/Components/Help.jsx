import React from 'react';

const Help = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">Help & Support</h1>
        
        {/* Intro */}
        <p className="text-lg text-gray-600 mb-8 text-center">
          Welcome to FixIt Help Center. We’re here to assist you with anything related to our home service platform.
        </p>

        {/* FAQs */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-xl">
              <h3 className="font-bold text-blue-700">How do I book a service?</h3>
              <p className="text-sm text-gray-600">Go to the homepage, select the service category, and choose a nearby shop to schedule your service.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl">
              <h3 className="font-bold text-blue-700">Is there any service charge from FixIt?</h3>
              <p className="text-sm text-gray-600">FixIt is free to use. You only pay the service provider you choose.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl">
              <h3 className="font-bold text-blue-700">How do I contact a shop?</h3>
              <p className="text-sm text-gray-600">Once you select a service provider, their contact details will be shown to you directly on the website.</p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Still need help?</h2>
          <p className="text-gray-600 mb-2">You can reach out to us anytime:</p>
          <ul className="text-gray-700">
            <li>Email: <span className="font-medium">support@fixit.com</span></li>
            <li>Phone: <span className="font-medium">+91 8207397299</span></li>
          </ul>
        </section>

        {/* Support Form */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Send us a message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              rows="4"
              placeholder="Describe your issue..."
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Help;
