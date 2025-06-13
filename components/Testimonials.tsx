import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Kumar',
    role: 'Parent',
    content: 'Think4U changed my daughter\'s life by providing her with educational support. She\'s now pursuing her engineering degree thanks to their scholarship program.',
    image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5
  },
  {
    name: 'Sunita Devi',
    role: 'Beneficiary',
    content: 'The skill development workshop helped me start my own tailoring business. I can now support my family independently and with dignity.',
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5
  },
  {
    name: 'Dr. Arjun Reddy',
    role: 'Volunteer Doctor',
    content: 'Volunteering with Think4U in their health camps has been incredibly rewarding. The organization\'s commitment to reaching remote areas is commendable.',
    image: 'https://images.pexels.com/photos/3752834/pexels-photo-3752834.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5E4E4F] mb-4">
              Voices of Change
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from the people whose lives have been touched by our programs and volunteers who make it all possible.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-[#5E4E4F]/20 transition-colors">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-[#5E4E4F]">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
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