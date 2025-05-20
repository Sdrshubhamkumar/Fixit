import React from "react";

const ServiceRequestForm = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen w-full px-4 font-poppins">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm brightness-90 z-[-1]"
        style={{
          backgroundImage:
            "url('https://homecareanandfacilities.com/wp-content/uploads/2019/12/home-deep-cleaning-870x500.jpg')",
        }}
      ></div>

      {/* Form Container */}
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md z-10">
        <h2 className="text-center text-2xl font-semibold mb-6">
          Service Request Form
        </h2>

        <form action="#" method="POST" className="space-y-4">
          <div>
            <label htmlFor="name" className="font-semibold">
              Customer Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </div>

          <div>
            <label htmlFor="phone" className="font-semibold">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </div>

          <div>
            <label htmlFor="address" className="font-semibold">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </div>

          <div>
            <label htmlFor="service_date" className="font-semibold">
              Service Date
            </label>
            <input
              type="date"
              id="service_date"
              name="service_date"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </div>

          <div>
            <label htmlFor="service_time" className="font-semibold">
              Service Time
            </label>
            <input
              type="time"
              id="service_time"
              name="service_time"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </div>

          <div>
            <label htmlFor="service" className="font-semibold">
              Select Electrical Appliance
            </label>
            <select
              id="service"
              name="service"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="refrigerator">Refrigerator Repair</option>
              <option value="washing_machine">Washing Machine Repair</option>
              <option value="air_conditioner">Air Conditioner Repair</option>
              <option value="television">Television Repair</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div>
            <label htmlFor="details" className="font-semibold">
              Detailed Service Request
            </label>
            <textarea
              id="details"
              name="details"
              rows="4"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceRequestForm;
