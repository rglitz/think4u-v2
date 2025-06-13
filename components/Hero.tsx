import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heart, Users, Target } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/6647028/pexels-photo-6647028.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="Think4U helping communities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#5E4E4F]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-16 h-16 text-white opacity-90" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering Communities,<br />
            <span className="text-yellow-300">Transforming Lives</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
            Join Think4U in creating lasting change through education, healthcare, food security, and women empowerment programs across Hyderabad and beyond.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="/donate">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg">
                Donate Now
              </Button>
            </Link>
            <Link href="/get-involved">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white text-[#5E4E4F] px-8 py-4 text-lg">
                Volunteer Today
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-yellow-300" />
              </div>
              <div className="text-3xl font-bold mb-2">75,000+</div>
              <div className="text-white/80">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Heart className="w-8 h-8 text-yellow-300" />
              </div>
              <div className="text-3xl font-bold mb-2">1,200+</div>
              <div className="text-white/80">Active Volunteers</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Target className="w-8 h-8 text-yellow-300" />
              </div>
              <div className="text-3xl font-bold mb-2">5</div>
              <div className="text-white/80">Cities Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}