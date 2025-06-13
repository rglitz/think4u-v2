import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Think4U Charity Foundation | Empowering Communities in Hyderabad',
  description: 'Empowering communities with food, education & health initiatives. Donate or volunteer with Think4U Foundation in Hyderabad.',
  keywords: 'charity, NGO, Hyderabad, donation, volunteer, education, food distribution, healthcare',
  openGraph: {
    title: 'Think4U Charity Foundation | Empowering Communities in Hyderabad',
    description: 'Empowering communities with food, education & health initiatives. Donate or volunteer with Think4U Foundation in Hyderabad.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}