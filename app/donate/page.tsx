import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, Shield, Award, RefreshCw } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Donate to Think4U Charity Foundation | UPI, Credit Card',
  description: 'Make secure donations to Think4U Foundation and support our charitable activities. Tax-deductible contributions accepted.',
};

const donationAmounts = [500, 1000, 2500, 5000, 10000];

export default function Donate() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#5E4E4F] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Make a Donation</h1>
            <p className="text-xl mb-8 opacity-90">
              Your generosity creates ripples of change that transform lives and communities
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Donation Form */}
              <Card className="order-2 lg:order-1">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#5E4E4F]">Secure Donation</CardTitle>
                  <p className="text-gray-600">Choose your donation amount and payment method</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Donation Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Donation Type</label>
                    <div className="flex space-x-4">
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="donationType" value="one-time" defaultChecked className="text-[#5E4E4F]" />
                        <span>One-time</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="donationType" value="monthly" className="text-[#5E4E4F]" />
                        <span>Monthly</span>
                      </label>
                    </div>
                  </div>

                  {/* Amount Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Amount (₹)</label>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {donationAmounts.map((amount) => (
                        <Button
                          key={amount}
                          variant="outline"
                          className="border-[#5E4E4F] text-[#5E4E4F] hover:bg-[#5E4E4F] hover:text-white"
                        >
                          ₹{amount}
                        </Button>
                      ))}
                    </div>
                    <Input placeholder="Enter custom amount" type="number" />
                  </div>

                  {/* Purpose */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Donation Purpose</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option>Where needed most</option>
                      <option>Education Programs</option>
                      <option>Food Distribution</option>
                      <option>Healthcare Camps</option>
                      <option>Women Empowerment</option>
                    </select>
                  </div>

                  {/* Donor Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-[#5E4E4F]">Donor Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="First Name" />
                      <Input placeholder="Last Name" />
                    </div>
                    <Input placeholder="Email Address" type="email" />
                    <Input placeholder="Phone Number" type="tel" />
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="anonymous" />
                      <label htmlFor="anonymous" className="text-sm text-gray-600">Make this donation anonymous</label>
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#5E4E4F] mb-3">Payment Method</h3>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-2 p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="payment" value="upi" className="text-[#5E4E4F]" />
                        <span>UPI (Google Pay, PhonePe, Paytm)</span>
                      </label>
                      <label className="flex items-center space-x-2 p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="payment" value="card" className="text-[#5E4E4F]" />
                        <span>Credit/Debit Card</span>
                      </label>
                      <label className="flex items-center space-x-2 p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="payment" value="netbanking" className="text-[#5E4E4F]" />
                        <span>Net Banking</span>
                      </label>
                    </div>
                  </div>

                  <Button className="bg-[#5E4E4F] hover:bg-[#4a3e3f] text-white w-full" size="lg">
                    Donate Securely
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Your donation is secure and encrypted. We never store your payment information.
                  </p>
                </CardContent>
              </Card>

              {/* Impact & Trust Indicators */}
              <div className="order-1 lg:order-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#5E4E4F]">Your Impact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#5E4E4F] rounded-full"></div>
                      <span className="text-sm">₹500 provides school supplies for 5 children</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#5E4E4F] rounded-full"></div>
                      <span className="text-sm">₹1000 feeds a family of 4 for a month</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#5E4E4F] rounded-full"></div>
                      <span className="text-sm">₹2500 sponsors a health camp for 50 people</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#5E4E4F] rounded-full"></div>
                      <span className="text-sm">₹5000 provides skill training for 10 women</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#5E4E4F]">Why Donate to Think4U?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-[#5E4E4F] mt-1" />
                      <div>
                        <h4 className="font-semibold text-sm">100% Transparent</h4>
                        <p className="text-xs text-gray-600">Regular updates on fund utilization</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Award className="w-5 h-5 text-[#5E4E4F] mt-1" />
                      <div>
                        <h4 className="font-semibold text-sm">Tax Deductible</h4>
                        <p className="text-xs text-gray-600">80G tax exemption certificate provided</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <RefreshCw className="w-5 h-5 text-[#5E4E4F] mt-1" />
                      <div>
                        <h4 className="font-semibold text-sm">Direct Impact</h4>
                        <p className="text-xs text-gray-600">90% of funds go directly to programs</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#f8f5f5]">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-[#5E4E4F] mb-3">Recent Impact</h3>
                    <div className="text-center space-y-2">
                      <div className="text-2xl font-bold text-[#5E4E4F]">₹0</div>
                      <div className="text-sm text-gray-600">Raised this month</div>
                      <div className="text-xs text-gray-500">2,847 lives impacted</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donor Recognition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#5E4E4F] mb-12 text-center">Our Generous Donors</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[#5E4E4F] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    AS
                  </div>
                  <h3 className="font-semibold text-[#5E4E4F]">Anita Sharma</h3>
                  <p className="text-sm text-gray-600">Monthly Donor</p>
                  <p className="text-xs text-gray-500 mt-2">"Supporting education programs for the past 2 years"</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[#5E4E4F] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    RK
                  </div>
                  <h3 className="font-semibold text-[#5E4E4F]">Rajesh Kumar</h3>
                  <p className="text-sm text-gray-600">Major Donor</p>
                  <p className="text-xs text-gray-500 mt-2">"Proud to support healthcare initiatives"</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[#5E4E4F] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    TI
                  </div>
                  <h3 className="font-semibold text-[#5E4E4F]">Tech Innovations Pvt Ltd</h3>
                  <p className="text-sm text-gray-600">Corporate Partner</p>
                  <p className="text-xs text-gray-500 mt-2">"CSR partnership for women empowerment"</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}