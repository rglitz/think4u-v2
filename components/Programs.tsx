import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Utensils, Heart, Users } from 'lucide-react';

const programs = [
  {
    title: 'Education Support',
    description: 'Providing quality education, school supplies, and scholarships to underprivileged children.',
    icon: BookOpen,
    stats: '1,200+ students supported',
    image: 'https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    link: '/our-work/education-programs'
  },
  {
    title: 'Food Distribution',
    description: 'Ensuring no one goes hungry through regular food distribution drives and community kitchens.',
    icon: Utensils,
    stats: '50,000+ meals served',
    image: 'https://images.pexels.com/photos/6647028/pexels-photo-6647028.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    link: '/our-work/food-programs'
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

export default function Programs() {
  return (
    <section className="py-16 bg-[#f8f5f5]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5E4E4F] mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive initiatives designed to address the root causes of poverty and inequality in our communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-12 h-12 bg-[#f8f5f5] rounded-full flex items-center justify-center">
                      <program.icon className="w-6 h-6 text-[#5E4E4F]" />
                    </div>
                    <div>
                      <CardTitle className="text-[#5E4E4F] text-xl">{program.title}</CardTitle>
                      <div className="text-sm font-semibold text-[#5E4E4F] bg-[#f8f5f5] px-2 py-1 rounded-full w-fit">
                        {program.stats}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                  <Link href={program.link}>
                    <Button className="bg-[#5E4E4F] hover:bg-[#4a3e3f] text-white">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/our-work">
              <Button size="lg" className="bg-[#5E4E4F] hover:bg-[#4a3e3f] text-white px-8">
                View All Programs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}