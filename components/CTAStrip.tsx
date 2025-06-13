import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heart, Users } from 'lucide-react';

export default function CTAStrip() {
  return (
    <section className="py-16 bg-[#5E4E4F] text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-12 h-12 text-yellow-300" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Changing Lives Today
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Every action counts. Whether you donate, volunteer, or simply spread the word, you're helping us build a better tomorrow for communities in need.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/donate">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg">
                <Heart className="w-5 h-5 mr-2" />
                Make a Donation
              </Button>
            </Link>
            <Link href="/get-involved">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#5E4E4F] px-8 py-4 text-lg">
                <Users className="w-5 h-5 mr-2" />
                Join as Volunteer
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">₹500</div>
              <div className="text-white/80">can provide school supplies for 5 children</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">₹1000</div>
              <div className="text-white/80">can feed a family of 4 for a month</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}