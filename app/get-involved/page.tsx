import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { HandHeart, Users, Building, Share2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Volunteer, Partner or Raise Funds | Get Involved with Think4U',
  description: 'Join Think4U by volunteering, fundraising, or partnering with us. Be part of the movement for good.',
};

export default function GetInvolved() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#5E4E4F] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h1>
            <p className="text-xl mb-8 opacity-90">
              Be the change you want to see. Join our community of changemakers making a real difference.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#5E4E4F] mb-12 text-center">Ways to Get Involved</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <HandHeart className="w-12 h-12 text-[#5E4E4F] mx-auto mb-4" />
                  <CardTitle className="text-[#5E4E4F]">Volunteer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Join our team of passionate volunteers and directly impact lives in your community.
                  </p>
                  <Button className="bg-[#5E4E4F] hover:bg-[#4a3e3f] text-white w-full">
                    Join as Volunteer
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="w-12 h-12 text-[#5E4E4F] mx-auto mb-4" />
                  <CardTitle className="text-[#5E4E4F]">Fundraise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Start your own fundraising campaign and rally your network for a cause you care about.
                  </p>
                  <Button className="bg-[#5E4E4F] hover:bg-[#4a3e3f] text-white w-full">
                    Start Fundraising
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Building className="w-12 h-12 text-[#5E4E4F] mx-auto mb-4" />
                  <CardTitle className="text-[#5E4E4F]">Partner</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Corporate partnerships and CSR initiatives to create sustainable social impact.
                  </p>
                  <Button className="bg-[#5E4E4F] hover:bg-[#4a3e3f] text-white w-full">
                    Become Partner
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Share2 className="w-12 h-12 text-[#5E4E4F] mx-auto mb-4" />
                  <CardTitle className="text-[#5E4E4F]">Spread Word</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Help us reach more people by sharing our mission on social media and with friends.
                  </p>
                  <Button className="bg-[#5E4E4F] hover:bg-[#4a3e3f] text-white w-full">
                    Share Mission
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#5E4E4F] mb-4">Volunteer Registration</h2>
              <p className="text-gray-600">Ready to make a difference? Fill out the form below and we'll get in touch!</p>
            </div>
            
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <Input placeholder="Enter your city" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Areas of Interest</label>
                    <div className="grid grid-cols-2 gap-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Education</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Healthcare</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Food Distribution</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Women Empowerment</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Why do you want to volunteer?</label>
                    <Textarea placeholder="Tell us about your motivation..." rows={4} />
                  </div>
                  
                  <Button className="bg-[#5E4E4F] hover:bg-[#4a3e3f] text-white w-full" size="lg">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Corporate Partnerships */}
      <section className="py-16 bg-[#f8f5f5]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#5E4E4F] mb-12 text-center">Corporate Partnerships</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#5E4E4F]">CSR Partnerships</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Align your corporate social responsibility goals with our impactful programs.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Employee volunteer programs</li>
                    <li>• Skill-based volunteering</li>
                    <li>• Impact measurement & reporting</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#5E4E4F]">Sponsorship Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Support specific programs or events that align with your brand values.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Event sponsorships</li>
                    <li>• Program funding</li>
                    <li>• Brand visibility opportunities</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#5E4E4F]">Strategic Partnerships</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Long-term collaborations to create sustainable social impact at scale.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Co-created programs</li>
                    <li>• Resource sharing</li>
                    <li>• Innovation partnerships</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" className="bg-[#5E4E4F] hover:bg-[#4a3e3f] text-white px-8">
                Explore Partnership Opportunities
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}