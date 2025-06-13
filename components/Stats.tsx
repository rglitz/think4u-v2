import { Card, CardContent } from '@/components/ui/card';
import { Users, Heart, Target, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: '75,000+',
    label: 'Lives Impacted',
    description: 'Individuals directly benefited from our programs'
  },
  {
    icon: Heart,
    number: '1,200+',
    label: 'Active Volunteers',
    description: 'Dedicated changemakers working with us'
  },
  {
    icon: Target,
    number: '50+',
    label: 'Communities Served',
    description: 'Villages and urban areas we work in'
  },
  {
    icon: Award,
    number: '5',
    label: 'Cities Covered',
    description: 'Locations across Telangana and Andhra Pradesh'
  }
];

export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5E4E4F] mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every number represents real lives touched, communities strengthened, and hope restored.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-gray-100 hover:border-[#5E4E4F]/20">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-[#f8f5f5] rounded-full flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-[#5E4E4F]" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-[#5E4E4F] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}