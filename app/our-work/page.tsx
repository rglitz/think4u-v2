import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Utensils, Heart, Users } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Impactful Charity Work in Hyderabad | Think4U',
  description: 'Explore the charity programs of Think4U in education, food distribution, and healthcare across Hyderabad.',
};

const programs = [
  {
    title: 'Food Distribution Programs',
    description: 'Ensuring no one goes hungry through regular food distribution drives and community kitchens.',
    icon: Utensils,
    stats: '50,000+ meals served',
    image: 'https://images.pexels.com/photos/6647028/pexels-photo-6647028.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    link: '/our-work/food-programs'
  },
  {
    title: 'Education Support',
    description: 'Providing quality education, school supplies, and scholarships to underprivileged children.',
    icon: BookOpen,
    stats: '1,200+ students supported',
    image: 'https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    link: '/our-work/education-programs'
  },
  {
    title: 'Healthcare Camps',
    description: 'Free medical camps and health awareness programs for underserved communities.',
    icon: Heart,
    stats: '15,000+ patients treated',
    image: 'https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    link: '/our-work/healthcare-camps'
  },
  {
    title: 'Women Empowerment',
    description: 'Skill development, micro-finance, and leadership training for women in rural areas.',
    icon: Users,
    stats: '800+ women empowered',
    image: 'https://images.pexels.com/photos/8484504/pexels-photo-8484504.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    link: '/our-work/women-empowerment'
  }
];

export default function OurWork() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#5E4E4F] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
            <p className="text-xl mb-8 opacity-90">
              Creating lasting change through focused programs that address the core needs of our communities
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#5E4E4F] mb-12 text-center">Our Programs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <program.icon className="w-8 h-8 text-[#5E4E4F]" />
                      <CardTitle className="text-[#5E4E4F]">{program.title}</CardTitle>
                    </div>
                    <div className="bg-[#f8f5f5] px-3 py-1 rounded-full text-sm font-semibold text-[#5E4E4F] w-fit">
                      {program.stats}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                    <Link href={program.link}>
                      <Button className="bg-[#5E4E4F] hover:bg-[#4a3e3f] text-white">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#5E4E4F] mb-12 text-center">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-[#5E4E4F] mb-2">75,000+</div>
                <div className="text-gray-600">Lives Impacted</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-[#5E4E4F] mb-2">1,200+</div>
                <div className="text-gray-600">Active Volunteers</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-[#5E4E4F] mb-2">50+</div>
                <div className="text-gray-600">Communities Served</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-[#5E4E4F] mb-2">5</div>
                <div className="text-gray-600">Cities Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#f8f5f5]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#5E4E4F] mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join us in creating positive change in communities across India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate">
                <Button size="lg" className="bg-[#5E4E4F] hover:bg-[#4a3e3f] text-white px-8">
                  Donate Now
                </Button>
              </Link>
              <Link href="/get-involved">
                <Button size="lg" variant="outline" className="border-[#5E4E4F] text-[#5E4E4F] hover:bg-[#5E4E4F] hover:text-white px-8">
                  Volunteer With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}