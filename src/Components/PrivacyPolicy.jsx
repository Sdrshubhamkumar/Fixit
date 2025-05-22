import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen p-6 md:p-12">
      <div className="max-w-4xl mx-auto rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Privacy Policy
        </h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>
            Your privacy is important to us. This Privacy Policy outlines how
            we collect, use, and protect your personal information when you use
            our home services website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
          <p>
            We may collect personal details like your name, contact information,
            address, and service preferences. This information is only collected
            when you voluntarily provide it during bookings or registrations.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Use of Information</h2>
          <p>
            The information we collect is used to provide, improve, and manage
            our services. We do not share your data with third parties without
            your consent, except for essential service operations.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Cookies</h2>
          <p>
            Our site may use cookies to enhance user experience and analyze site
            usage. You can adjust your browser settings to refuse cookies, though
            this may affect functionality.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
          <p>
            We implement industry-standard measures to safeguard your personal
            data. However, no method of transmission over the internet is 100%
            secure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Third-Party Services</h2>
          <p>
            We may link to external services or use third-party tools for analytics.
            These services have their own privacy policies, and we are not
            responsible for their practices.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Children's Privacy</h2>
          <p>
            Our services are not intended for children under the age of 13. We do
            not knowingly collect data from minors.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">8. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Changes will be posted on
            this page, and your continued use of the site indicates acceptance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at{" "}
            <a
              href="mailto:privacy@homeservice.com"
              className="text-blue-600 underline"
            >
              privacy@homeservice.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}