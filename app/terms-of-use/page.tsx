import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | Think4U Charity Foundation',
  description: 'Terms of Use for Think4U Charity Foundation website and services.',
};

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#5E4E4F] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Use</h1>
            <p className="text-xl mb-8 opacity-90">
              Please read these terms carefully before using our website and services.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-8">
                <strong>Last updated:</strong> January 1, 2025
              </p>

              <h2 className="text-2xl font-bold text-[#5E4E4F] mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-6">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h2 className="text-2xl font-bold text-[#5E4E4F] mb-4">2. Use License</h2>
              <p className="text-gray-600 mb-6">
                Permission is granted to temporarily download one copy of the materials on Think4U's website for personal, 
                non-commercial transitory viewing only.
              </p>

              <h2 className="text-2xl font-bold text-[#5E4E4F] mb-4">3. Donations</h2>
              <p className="text-gray-600 mb-6">
                All donations made through this website are voluntary and will be used to support Think4U's charitable activities. 
                Donations are generally non-refundable except in cases of technical errors.
              </p>

              <h2 className="text-2xl font-bold text-[#5E4E4F] mb-4">4. Volunteer Services</h2>
              <p className="text-gray-600 mb-6">
                Volunteer opportunities are subject to availability and approval. Think4U reserves the right to accept or 
                decline volunteer applications at its discretion.
              </p>

              <h2 className="text-2xl font-bold text-[#5E4E4F] mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                Think4U shall not be liable for any damages arising from the use or inability to use the materials on this website.
              </p>

              <h2 className="text-2xl font-bold text-[#5E4E4F] mb-4">6. Contact Information</h2>
              <p className="text-gray-600 mb-6">
                For questions regarding these terms, please contact us at:
              </p>
              <div className="bg-[#f8f5f5] p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Think4U Charity Foundation</strong><br />
                  Email: contact@think4u.org<br />
                  Phone: +91 98765 43210<br />
                  Address: #12-34, Banjara Hills, Hyderabad, Telangana 500034
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}