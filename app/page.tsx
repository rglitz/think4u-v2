import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Programs from '@/components/Programs';
import Testimonials from '@/components/Testimonials';
import CTAStrip from '@/components/CTAStrip';

export const metadata = {
  title: 'Welcome to Think4U | Charity Foundation in Hyderabad',
  description: 'Empowering communities with food, education & health initiatives. Donate or volunteer with Think4U.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Programs />
      <Testimonials />
      <CTAStrip />
    </>
  );
}