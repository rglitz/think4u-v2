import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Think4U Charity Foundation | Hyderabad',
  description: 'Reach out to Think4U via email or social media. We\'re based in Hyderabad and ready to collaborate.',
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#5E4E4F] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl mb-8 opacity-90">
              Ready to make a difference? Get in touch with us to learn more about our programs or discuss collaboration opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#5E4E4F]">Send us a Message</CardTitle>
                  <p className="text-gray-600">We'd love to hear from you. Fill out the form below and we'll get back to you soon.</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <Input placeholder="Enter your first name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <Input placeholder="Enter your last name" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <Input type="email" placeholder="Enter your email" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <Input type="tel" placeholder="Enter your phone number" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <select className="w-full p-2 border border-gray-300 rounded-md">
                        <option value="">Select a subject</option>
                        <option value="volunteer">Volunteer Opportunities</option>
                        <option value="donate">Donation Inquiry</option>
                        <option value="partnership">Partnership</option>
                        <option value="media">Media Inquiry</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <Textarea placeholder="Tell us how we can help you..." rows={6} />
                    </div>
                    
                    <Button className="bg-[#5E4E4F] hover:bg-[#4a3e3f] text-white w-full" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#5E4E4F]">Get in Touch</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-[#5E4E4F] mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Address</h3>
                        <p className="text-gray-600">
                          Think4U Charity Foundation<br />
                          #12-34, Banjara Hills<br />
                          Hyderabad, Telangana 500034<br />
                          India
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-[#5E4E4F] mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Phone</h3>
                        <p className="text-gray-600">+91 98765 43210</p>
                        <p className="text-gray-600">+91 87654 32109</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-[#5E4E4F] mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Email</h3>
                        <p className="text-gray-600">contact@think4u.org</p>
                        <p className="text-gray-600">info@think4u.org</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-[#5E4E4F] mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Office Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#5E4E4F]">Follow Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-4">
                      <a href="#" className="w-10 h-10 bg-[#5E4E4F] text-white rounded-full flex items-center justify-center hover:bg-[#4a3e3f] transition-colors">
                        <span className="text-sm font-bold">f</span>
                      </a>
                      <a href="#" className="w-10 h-10 bg-[#5E4E4F] text-white rounded-full flex items-center justify-center hover:bg-[#4a3e3f] transition-colors">
                        <span className="text-sm font-bold">ig</span>
                      </a>
                      <a href="#" className="w-10 h-10 bg-[#5E4E4F] text-white rounded-full flex items-center justify-center hover:bg-[#4a3e3f] transition-colors">
                        <span className="text-sm font-bold">tw</span>
                      </a>
                      <a href="#" className="w-10 h-10 bg-[#5E4E4F] text-white rounded-full flex items-center justify-center hover:bg-[#4a3e3f] transition-colors">
                        <span className="text-sm font-bold">li</span>
                      </a>
                    </div>
                    <p className="text-gray-600 mt-4">
                      @think4u on all social media platforms
                    </p>
                  </CardContent>
                </Card>

                {/* Emergency Contact */}
                <Card className="bg-[#f8f5f5]">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-[#5E4E4F] mb-2">Emergency Support</h3>
                    <p className="text-gray-600 mb-3">
                      For urgent matters or emergency assistance, please call our 24/7 helpline:
                    </p>
                    <p className="text-xl font-bold text-[#5E4E4F]">+91 99999 12345</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#5E4E4F] mb-8 text-center">Find Us</h2>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#5E4E4F] mx-auto mb-4" />
                <p className="text-gray-600">Interactive map would be embedded here</p>
                <p className="text-sm text-gray-500 mt-2">Google Maps integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}