import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, MapPin, Users, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Upcoming & Past Charity Events | Think4U Foundation',
  description: 'Stay updated on Think4U\'s community events and charity drives in Hyderabad.',
};

const upcomingEvents = [
  {
    title: 'Annual Charity Run',
    date: 'March 15, 2025',
    time: '6:00 AM - 10:00 AM',
    location: 'Hussain Sagar Lake, Hyderabad',
    description: 'Join us for a 5K charity run to raise funds for education programs.',
    participants: '500+ registered',
    image: 'https://images.pexels.com/photos/2834914/pexels-photo-2834914.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
  },
  {
    title: 'Health & Wellness Camp',
    date: 'March 22, 2025',
    time: '9:00 AM - 4:00 PM',
    location: 'Community Center, Secunderabad',
    description: 'Free health checkups, consultations, and health awareness sessions.',
    participants: '200+ expected',
    image: 'https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
  },
  {
    title: 'Skill Development Workshop',
    date: 'April 5, 2025',
    time: '10:00 AM - 3:00 PM',
    location: 'Think4U Center, Hyderabad',
    description: 'Computer literacy and digital skills training for women.',
    participants: '50 seats available',
    image: 'https://images.pexels.com/photos/8484504/pexels-photo-8484504.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
  }
];

const pastEvents = [
  {
    title: 'Winter Blanket Distribution',
    date: 'January 15, 2025',
    description: 'Distributed 1,000 blankets to homeless individuals',
    impact: '1,000 people helped',
    image: 'https://images.pexels.com/photos/6647028/pexels-photo-6647028.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
  },
  {
    title: 'Children\'s Day Celebration',
    date: 'November 14, 2024',
    description: 'Special event with games, gifts, and educational activities',
    impact: '300 children participated',
    image: 'https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
  },
  {
    title: 'Women Empowerment Summit',
    date: 'October 20, 2024',
    description: 'Leadership training and networking event for women',
    impact: '150 women empowered',
    image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
  },
  {
    title: 'Flood Relief Drive',
    date: 'September 10, 2024',
    description: 'Emergency relief supplies for flood-affected families',
    impact: '500 families assisted',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
  }
];

export default function Events() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#5E4E4F] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <CalendarDays className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Events</h1>
            <p className="text-xl mb-8 opacity-90">
              Join our community events and be part of meaningful change happening in your neighborhood
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#5E4E4F] mb-12 text-center">Upcoming Events</h2>
            <div className="space-y-8">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-2xl text-[#5E4E4F] mb-2">{event.title}</CardTitle>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <CalendarDays className="w-4 h-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{event.participants}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-0">
                        <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button className="bg-[#5E4E4F] hover:bg-[#4a3e3f] text-white">
                            Register Now
                          </Button>
                          <Button variant="outline" className="border-[#5E4E4F] text-[#5E4E4F] hover:bg-[#5E4E4F] hover:text-white">
                            Learn More
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#5E4E4F] mb-12 text-center">Past Events</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {pastEvents.map((event, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#5E4E4F] mb-2">{event.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">{event.date}</p>
                    <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                    <div className="bg-[#f8f5f5] px-3 py-2 rounded-full text-sm font-semibold text-[#5E4E4F] w-fit">
                      Impact: {event.impact}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Event Registration CTA */}
      <section className="py-16 bg-[#f8f5f5]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#5E4E4F] mb-6">Never Miss an Event</h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter and get notified about upcoming events and volunteer opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5E4E4F]"
              />
              <Button className="bg-[#5E4E4F] hover:bg-[#4a3e3f] text-white px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}