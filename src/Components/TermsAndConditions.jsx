import React from 'react';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen p-6 md:p-12">
      <div className="max-w-4xl  mx-auto shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-6  text-center">
          Terms and Conditions
        </h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>
            Welcome to our Home Service platform. These Terms and Conditions govern your use of our website and services. By using our site, you agree to these terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Services Offered</h2>
          <p>
            We provide various home-related services including cleaning, repair, pest control, car wash, and more. All services are subject to availability and confirmation.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Booking & Payments</h2>
          <p>
            Users can book services through the website. Payment terms, including online or cash options, are mentioned at the time of booking. We reserve the right to cancel or reschedule bookings.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. User Responsibilities</h2>
          <p>
            You agree to provide accurate information during bookings and to treat service personnel with respect. Misuse or fraudulent activity may result in termination of access.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Cancellations & Refunds</h2>
          <p>
            Cancellations must be made within a reasonable time. Refunds are processed according to the specific service's refund policy outlined at the time of booking.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Liability</h2>
          <p>
            We strive to offer reliable services, but are not liable for any direct or indirect damages caused by service delays or third-party contractors.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Modifications</h2>
          <p>
            We reserve the right to update these terms at any time. Continued use of the website indicates acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at <a href="mailto:support@homeservice.com" className="text-blue-600 underline">support@homeservice.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}