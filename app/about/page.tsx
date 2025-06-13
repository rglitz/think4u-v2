import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Heart, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Think4U | Our Vision, Mission & Journey',
  description: 'Learn about Think4U\'s mission, values, and the journey of making lives better in Hyderabad and beyond.',
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#5E4E4F] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Think4U</h1>
            <p className="text-xl mb-8 opacity-90">
              Building bridges of hope and creating sustainable change in communities across Hyderabad
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#5E4E4F] mb-8 text-center">Who We Are</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-6 leading-relaxed">
                  Think4U Charity Foundation is a registered NGO based in Hyderabad, dedicated to creating meaningful change in the lives of underserved communities. Since our inception, we have been committed to addressing the fundamental needs of society through sustainable and impactful programs.
                </p>
                <p className="text-lg leading-relaxed">
                  Our work spans across education, healthcare, food security, and women empowerment, touching thousands of lives and building stronger, more resilient communities.
                </p>
              </div>
              <div className="bg-[#f8f5f5] p-8 rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop" 
                  alt="Think4U team working with community"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#5E4E4F] mb-12 text-center">Our Foundation</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-2 border-[#e8e6e6] hover:border-[#5E4E4F] transition-colors">
                <CardHeader>
                  <Target className="w-12 h-12 text-[#5E4E4F] mx-auto mb-4" />
                  <CardTitle className="text-[#5E4E4F]">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    To empower underprivileged communities through sustainable programs in education, healthcare, and livelihood development, creating lasting positive change.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-[#e8e6e6] hover:border-[#5E4E4F] transition-colors">
                <CardHeader>
                  <Heart className="w-12 h-12 text-[#5E4E4F] mx-auto mb-4" />
                  <CardTitle className="text-[#5E4E4F]">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    A world where every individual has access to basic necessities, quality education, and opportunities to thrive with dignity and purpose.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-[#e8e6e6] hover:border-[#5E4E4F] transition-colors">
                <CardHeader>
                  <Award className="w-12 h-12 text-[#5E4E4F] mx-auto mb-4" />
                  <CardTitle className="text-[#5E4E4F]">Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Transparency, compassion, sustainability, and community-driven approach guide every initiative we undertake.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-[#f8f5f5]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#5E4E4F] mb-12 text-center">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <img 
                    src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
                    alt="Founder"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-[#5E4E4F] mb-2">Priya Sharma</h3>
                  <p className="text-gray-600 mb-2">Founder & Director</p>
                  <p className="text-sm text-gray-500">15+ years in social work and community development</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <img 
                    src="https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
                    alt="Program Director"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-[#5E4E4F] mb-2">Rajesh Kumar</h3>
                  <p className="text-gray-600 mb-2">Program Director</p>
                  <p className="text-sm text-gray-500">Expert in education and child development programs</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <img 
                    src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
                    alt="Operations Manager"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-[#5E4E4F] mb-2">Anita Reddy</h3>
                  <p className="text-gray-600 mb-2">Operations Manager</p>
                  <p className="text-sm text-gray-500">Healthcare and community outreach specialist</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#5E4E4F] mb-12 text-center">Our Journey</h2>
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-[#5E4E4F] text-white px-4 py-2 rounded-full font-semibold">2020</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#5E4E4F]">Foundation Established</h3>
                  <p className="text-gray-600">Think4U Charity Foundation was officially registered as an NGO in Hyderabad</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-[#5E4E4F] text-white px-4 py-2 rounded-full font-semibold">2021</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#5E4E4F]">First Education Program</h3>
                  <p className="text-gray-600">Launched our first education support program reaching 200 children</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-[#5E4E4F] text-white px-4 py-2 rounded-full font-semibold">2022</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#5E4E4F]">Healthcare Expansion</h3>
                  <p className="text-gray-600">Organized 50+ health camps serving over 5,000 people</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-[#5E4E4F] text-white px-4 py-2 rounded-full font-semibold">2023</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#5E4E4F]">Women Empowerment Initiative</h3>
                  <p className="text-gray-600">Started skill development programs for 500+ women</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-[#5E4E4F] text-white px-4 py-2 rounded-full font-semibold">2024</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#5E4E4F]">Multi-City Expansion</h3>
                  <p className="text-gray-600">Extended operations to 3 cities with 1000+ active volunteers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}