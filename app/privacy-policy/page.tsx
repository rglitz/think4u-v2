import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Think4U Charity Foundation',
  description: 'Privacy Policy for Think4U Charity Foundation - How we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#5E4E4F] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl mb-8 opacity-90">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
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

              <h2 className="text-2xl font-bold text-[#5E4E4F] mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-6">
                We collect information you provide directly to us, such as when you create an account, make a donation, 
                volunteer with us, or contact us for support.
              </p>

              <h2 className="text-2xl font-bold text-[#5E4E4F] mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-6">
                We use the information we collect to provide, maintain, and improve our services, process donations, 
                communicate with you, and fulfill our charitable mission.
              </p>

              <h2 className="text-2xl font-bold text-[#5E4E4F] mb-4">3. Information Sharing</h2>
              <p className="text-gray-600 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except as described in this policy.
              </p>

              <h2 className="text-2xl font-bold text-[#5E4E4F] mb-4">4. Data Security</h2>
              <p className="text-gray-600 mb-6">
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-bold text-[#5E4E4F] mb-4">5. Contact Us</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
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