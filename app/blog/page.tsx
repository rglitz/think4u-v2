import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, User, Clock } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Impact Stories & NGO Insights | Think4U Blog',
  description: 'Real stories, updates, and learnings from Think4U\'s ground-level work in communities.',
};

const blogPosts = [
  {
    title: 'Transforming Lives Through Education: Meera\'s Success Story',
    excerpt: 'How our education support program helped a young girl from a rural village achieve her dreams of becoming a teacher.',
    author: 'Priya Sharma',
    date: 'February 28, 2025',
    readTime: '5 min read',
    category: 'Success Stories',
    image: 'https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    featured: true
  },
  {
    title: 'The Impact of Community Health Camps in Rural Hyderabad',
    excerpt: 'A comprehensive look at how our mobile health camps are bringing essential healthcare to underserved communities.',
    author: 'Dr. Anita Reddy',
    date: 'February 25, 2025',
    readTime: '7 min read',
    category: 'Healthcare',
    image: 'https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
  },
  {
    title: 'Building Sustainable Livelihoods: Women Empowerment Initiative',
    excerpt: 'Discover how our skill development programs are creating economic opportunities for women in marginalized communities.',
    author: 'Rajesh Kumar',
    date: 'February 22, 2025',
    readTime: '6 min read',
    category: 'Women Empowerment',
    image: 'https://images.pexels.com/photos/8484504/pexels-photo-8484504.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
  },
  {
    title: 'How to Start a Fundraiser in India: A Complete Guide',
    excerpt: 'Everything you need to know about organizing effective fundraising campaigns for social causes in India.',
    author: 'Priya Sharma',
    date: 'February 20, 2025',
    readTime: '10 min read',
    category: 'Fundraising',
    image: 'https://images.pexels.com/photos/6647028/pexels-photo-6647028.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
  },
  {
    title: 'Best NGOs in Hyderabad: Making a Real Difference',
    excerpt: 'An overview of impactful NGOs in Hyderabad and how they\'re addressing various social challenges.',
    author: 'Team Think4U',
    date: 'February 18, 2025',
    readTime: '8 min read',
    category: 'NGO Insights',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
  },
  {
    title: 'Food Security in Urban Slums: Our Approach and Learnings',
    excerpt: 'Insights from our food distribution programs and the challenges of addressing hunger in urban settings.',
    author: 'Anita Reddy',
    date: 'February 15, 2025',
    readTime: '6 min read',
    category: 'Food Security',
    image: 'https://images.pexels.com/photos/6647207/pexels-photo-6647207.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
  }
];

const categories = ['All', 'Success Stories', 'Healthcare', 'Education', 'Women Empowerment', 'Fundraising', 'NGO Insights'];

export default function Blog() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#5E4E4F] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Stories & Insights</h1>
            <p className="text-xl mb-8 opacity-90">
              Real stories from the field, learnings from our work, and insights from the world of social impact
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Badge 
                  key={category}
                  variant={category === 'All' ? 'default' : 'outline'}
                  className={`px-4 py-2 cursor-pointer transition-colors ${
                    category === 'All' 
                      ? 'bg-[#5E4E4F] text-white hover:bg-[#4a3e3f]' 
                      : 'border-[#5E4E4F] text-[#5E4E4F] hover:bg-[#5E4E4F] hover:text-white'
                  }`}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-[#5E4E4F] mb-8">Featured Story</h2>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <Badge className="mb-4 bg-[#5E4E4F] text-white">
                      {featuredPost.category}
                    </Badge>
                    <h3 className="text-2xl font-bold text-[#5E4E4F] mb-4">{featuredPost.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CalendarDays className="w-4 h-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Link href={`/blog/${featuredPost.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                      <button className="bg-[#5E4E4F] hover:bg-[#4a3e3f] text-white px-6 py-2 rounded-lg transition-colors">
                        Read Full Story
                      </button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-[#5E4E4F] mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-[#f8f5f5] text-[#5E4E4F] hover:bg-[#5E4E4F] hover:text-white">
                      {post.category}
                    </Badge>
                    <h3 className="text-xl font-semibold text-[#5E4E4F] mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center space-x-3 text-xs text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CalendarDays className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Link href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                      <button className="text-[#5E4E4F] hover:text-[#4a3e3f] font-semibold text-sm transition-colors">
                        Read More →
                      </button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-[#f8f5f5]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#5E4E4F] mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter for latest stories, updates, and insights from our work
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5E4E4F]"
              />
              <button className="bg-[#5E4E4F] hover:bg-[#4a3e3f] text-white px-8 py-3 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}