import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#5E4E4F] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/20">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
            <p className="text-white/80 mb-8">
              Subscribe to our newsletter for updates on our programs, events, and impact stories
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-white text-[#5E4E4F] hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="h-8 w-8" />
              <span className="text-xl font-bold">Think4U</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              A registered NGO in Hyderabad dedicated to creating meaningful change through education, healthcare, food security, and women empowerment programs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <span className="text-sm font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <span className="text-sm font-bold">ig</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <span className="text-sm font-bold">tw</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <span className="text-sm font-bold">li</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/our-work" className="text-white/80 hover:text-white transition-colors">Our Work</Link></li>
              <li><Link href="/get-involved" className="text-white/80 hover:text-white transition-colors">Get Involved</Link></li>
              <li><Link href="/events" className="text-white/80 hover:text-white transition-colors">Events</Link></li>
              <li><Link href="/blog" className="text-white/80 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Programs</h3>
            <ul className="space-y-3">
              <li><Link href="/our-work/education-programs" className="text-white/80 hover:text-white transition-colors">Education Support</Link></li>
              <li><Link href="/our-work/food-programs" className="text-white/80 hover:text-white transition-colors">Food Distribution</Link></li>
              <li><Link href="/our-work/healthcare-camps" className="text-white/80 hover:text-white transition-colors">Healthcare Camps</Link></li>
              <li><Link href="/our-work/women-empowerment" className="text-white/80 hover:text-white transition-colors">Women Empowerment</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">
                    #12-34, Banjara Hills<br />
                    Hyderabad, Telangana 500034
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <p className="text-white/80 text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <p className="text-white/80 text-sm">contact@think4u.org</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/80 text-sm text-center md:text-left">
              © 2025 Think4U Charity Foundation | Registered NGO in Hyderabad
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-white/80 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="text-white/80 hover:text-white text-sm transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}