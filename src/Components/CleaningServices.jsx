import React from "react";

const categorizedServices = {
  "General Home Cleaning": [
    { title: "Living Room Cleaning", link: "/book/living-room" },
    { title: "Bathroom deep cleaning", link: "/book/kitchen" },
    { title: "Floor scrubbing and polishing", link: "/book/living-room" },
    { title: "Dusting, mopping, and vacuuming", link: "/book/kitchen" },
  ],
  "Deep Cleaning": [
    { title: "Full House Deep Clean", link: "/book/deep-clean" },
    { title: "Post-Renovation Cleaning", link: "/book/renovation" },
    { title: "Full House Deep Clean", link: "/book/deep-clean" },
    { title: "Post-Renovation Cleaning", link: "/book/renovation" },
  ],
  "Furniture & Upholstery": [
    { title: "Sofa Shampooing", link: "/book/sofa" },
    { title: "Mattress Sanitization", link: "/book/mattress" },
    { title: "Carpet & rug deep cleaning", link: "/book/sofa" },
    { title: "Curtain steam cleaning", link: "/book/mattress" },
  ],
  
};

export default function CleaningServices() {
  return (
    <div className="p-8">
      {Object.entries(categorizedServices).map(([category, services], idx) => (
        <div key={idx} className="mb-12">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">{category}</h2>
          <div className="flex flex-wrap justify-around">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-[url('./public/videos/light_back_video.gif')]  p-6 rounded-xl shadow-xl hover:shadow-xl transition-all flex flex-col justify-between w-60"
              >
                <h3 className="text-lg font-semibold mb-4 text-blue-900 text-center">{service.title}</h3>
                <a
                  href={service.link}
                  className="mt-auto inline-block text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}