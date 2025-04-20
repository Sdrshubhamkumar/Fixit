import React from 'react';

const Help = ({ mode }) => {
  const isDark = mode === 'dark';

  return (
    <div className={`min-h-screen py-10 px-6 ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className={`max-w-5xl mx-auto p-8 rounded-2xl shadow-md ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <h1 className={`text-4xl font-bold mb-6 text-center ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>
          Help & Support
        </h1>

        {/* Intro */}
        <p className={`text-lg mb-8 text-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          Welcome to FixIt Help Center. We’re here to assist you with anything related to our home service platform.
        </p>

        {/* FAQs */}
        <section className="mb-10">
          <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: 'How do I book a service?',
                answer: 'Go to the homepage, select the service category, and choose a nearby shop to schedule your service.'
              },
              {
                question: 'Is there any service charge from FixIt?',
                answer: 'FixIt is free to use. You only pay the service provider you choose.'
              },
              {
                question: 'How do I contact a shop?',
                answer: 'Once you select a service provider, their contact details will be shown to you directly on the website.'
              }
            ].map((faq, idx) => (
              <div key={idx} className={`p-4 rounded-xl ${isDark ? 'bg-blue-950' : 'bg-blue-50'}`}>
                <h3 className={`font-bold ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>{faq.question}</h3>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Info */}
        <section className="mb-10">
          <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>Still need help?</h2>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-2`}>You can reach out to us anytime:</p>
          <ul className={`${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
            <li>Email: <span className="font-medium">support@fixit.com</span></li>
            <li>Phone: <span className="font-medium">+91 8207397299</span></li>
          </ul>
        </section>

        {/* Support Form */}
        <section>
          <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>Send us a message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${isDark ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500' : 'focus:ring-blue-400'}`}
            />
            <input
              type="email"
              placeholder="Your Email"
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${isDark ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500' : 'focus:ring-blue-400'}`}
            />
            <textarea
              rows="4"
              placeholder="Describe your issue..."
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${isDark ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500' : 'focus:ring-blue-400'}`}
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
