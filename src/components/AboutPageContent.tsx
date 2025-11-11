"use client";
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getPlaceholderImage, type PlaceholderName, type ImagePlaceholder } from '@/data/imagePlaceholders';

export default function AboutPageContent() {
  const [activeTab, setActiveTab] = useState('story');
  const [isVisible, setIsVisible] = useState(false);
  const [currentYear, setCurrentYear] = useState(0);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [currentCustomers, setCurrentCustomers] = useState(0);
  const [currentProjects, setCurrentProjects] = useState(0);
  const [resolvedImages, setResolvedImages] = useState<Record<PlaceholderName, { url: string; alt: string }>>({});

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counters
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const stepValue = 50 / steps;
      const stepTime = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setCurrentYear(Math.floor(stepValue * currentStep));
        setCurrentExperience(Math.floor(stepValue * currentStep));
        setCurrentCustomers(Math.floor(stepValue * currentStep * 1000));
        setCurrentProjects(Math.floor(stepValue * currentStep * 100));
        
        if (currentStep >= steps) {
          clearInterval(timer);
          setCurrentYear(50);
          setCurrentExperience(50);
          setCurrentCustomers(50000);
          setCurrentProjects(5000);
        }
      }, stepTime);
    };

    const timeout = setTimeout(animateCounters, 500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    let isMounted = true;

    const loadImages = async () => {
      try {
        const response = await fetch('/api/imagekit-placeholders');
        if (!response.ok) {
          throw new Error(`Failed to fetch placeholder images: ${response.status}`);
        }
        const data = await response.json();
        if (isMounted && data?.placeholders) {
          setResolvedImages(data.placeholders as Record<PlaceholderName, { url: string; alt: string }>);
        }
      } catch (error) {
        console.error('Failed to load ImageKit placeholders', error);
      }
    };

    loadImages();

    return () => {
      isMounted = false;
    };
  }, []);

  const resolvePlaceholder = (placeholder: ImagePlaceholder) => {
    const resolved = resolvedImages[placeholder.key];
    return {
      url: resolved?.url ?? placeholder.defaultUrl,
      alt: resolved?.alt ?? placeholder.alt,
    };
  };

  const heroImage = resolvePlaceholder(getPlaceholderImage('heroBackground'));
  const aboutStoryImage = resolvePlaceholder(getPlaceholderImage('aboutSideImage'));

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage.url}
            alt={heroImage.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-orange-700/60"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-6xl mx-auto">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="mb-6">
                <span className="bg-[#ea580c] text-white px-6 py-3 rounded-full text-sm font-semibold animate-pulse">
                  Trusted Service
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                About United Plumbing CCTX in Texas
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl opacity-95 max-w-4xl mx-auto leading-relaxed mb-8">
                Years of trusted service across Texas, innovation, and unwavering commitment to excellence
              </p>
              <div className="flex justify-center">
                <a 
                  href="tel:+18336090936" 
                  className="group relative bg-white text-[#ea580c] font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3 animate-pulse"
                >
                  <div className="relative">
                    <svg className="w-6 h-6 animate-bounce text-[#ea580c]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"/>
                    </svg>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                  </div>
                  <span className="font-bold tracking-wide">(833) 609-0936</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#ea580c] to-[#c2410c] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold mb-2">{currentYear}+</div>
                <div className="text-sm md:text-base opacity-90">Years of Experience</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold mb-2">{currentExperience}+</div>
                <div className="text-sm md:text-base opacity-90">Expert Plumbers</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold mb-2">{currentCustomers.toLocaleString()}+</div>
                <div className="text-sm md:text-base opacity-90">Happy Customers</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold mb-2">{currentProjects.toLocaleString()}+</div>
                <div className="text-sm md:text-base opacity-90">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section id="our-story" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the journey that made us the most trusted name in plumbing services
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'story', label: 'Our Story', icon: '📖' },
              { id: 'mission', label: 'Mission & Vision', icon: '🎯' },
              { id: 'values', label: 'Core Values', icon: '💎' },
              { id: 'timeline', label: 'Timeline', icon: '📅' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-[#1c7bc8] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {activeTab === 'story' && (
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">A Legacy of Excellence Across the USA Since 1973</h3>
                    <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                      <p>
                        Founded in 1973 by George Davidson, United Plumbing CCTX began as a small family business with a simple mission: to provide honest, reliable plumbing services throughout the United States. What started as a one-man operation has grown into one of the most trusted names in professional plumbing services across the entire USA.
                      </p>
                      <p>
                        Over the past five decades, we've witnessed the evolution of plumbing technology, from basic pipe systems to sophisticated smart home solutions. Through it all, we've maintained our commitment to quality, integrity, and customer satisfaction while expanding our reach to serve communities nationwide.
                      </p>
                      <p>
                        Today, United Plumbing CCTX serves thousands of residential and commercial customers across the US with a team of over 50 licensed professionals, state-of-the-art equipment, and unwavering dedication to excellence in every state we operate.
                      </p>
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={aboutStoryImage.url}
                      alt={aboutStoryImage.alt}
                      className="rounded-2xl shadow-xl w-full h-64 sm:h-80 lg:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'mission' && (
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="bg-gradient-to-br from-[#1c7bc8] to-[#0f5a9e] text-white p-8 rounded-2xl">
                    <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                    <p className="text-lg leading-relaxed">
                      To provide exceptional plumbing services across the United States that exceed customer expectations through innovation, reliability, and unwavering commitment to quality. We strive to be the most trusted name in professional plumbing throughout the USA, building lasting relationships with our customers and communities nationwide.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-2xl">
                    <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                    <p className="text-lg leading-relaxed">
                      To lead the plumbing industry across the United States through technological advancement, sustainable practices, and exceptional service delivery. We envision a future where every home and business throughout the USA has access to reliable, efficient, and environmentally conscious plumbing solutions.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: '🤝',
                      title: 'Integrity',
                      description: 'We conduct business with honesty, transparency, and ethical practices in everything we do.'
                    },
                    {
                      icon: '⭐',
                      title: 'Excellence',
                      description: 'We strive for excellence in every project, no matter how big or small.'
                    },
                    {
                      icon: '⚡',
                      title: 'Reliability',
                      description: 'Our customers can count on us to be there when they need us, 24/7.'
                    },
                    {
                      icon: '💡',
                      title: 'Innovation',
                      description: 'We embrace new technologies and methods to provide the best solutions.'
                    },
                    {
                      icon: '❤️',
                      title: 'Customer Focus',
                      description: 'Our customers are at the heart of every decision we make.'
                    },
                    {
                      icon: '🌱',
                      title: 'Sustainability',
                      description: 'We promote eco-friendly solutions and responsible resource management.'
                    }
                  ].map((value, index) => (
                    <div key={index} className="group bg-gray-50 hover:bg-white p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      <div className="text-4xl mb-4">{value.icon}</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'timeline' && (
              <div className="p-8 md:p-12">
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-1 bg-[#1c7bc8]"></div>
                  {[
                    {
                      year: '1973',
                      title: 'Company Founded',
                      description: 'George Davidson establishes United Plumbing CCTX as a small family business.'
                    },
                    {
                      year: '1985',
                      title: 'First Expansion',
                      description: 'Expanded services to neighboring cities and hired our first team of plumbers.'
                    },
                    {
                      year: '1995',
                      title: 'Commercial Services',
                      description: 'Launched commercial plumbing services to serve businesses and industrial clients.'
                    },
                    {
                      year: '2005',
                      title: 'Technology Integration',
                      description: 'Adopted modern plumbing technologies and computerized scheduling systems.'
                    },
                    {
                      year: '2015',
                      title: 'Multi-State Expansion',
                      description: 'Expanded operations across multiple states with 50+ licensed professionals.'
                    },
                    {
                      year: '2023',
                      title: '50th Anniversary',
                      description: 'Celebrated 50 years of excellence and launched next-generation smart plumbing solutions.'
                    }
                  ].map((event, index) => (
                    <div key={index} className="relative flex items-center mb-12">
                      <div className="absolute left-6 w-4 h-4 bg-[#1c7bc8] rounded-full border-4 border-white shadow-lg"></div>
                      <div className="ml-16 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <div className="text-2xl font-bold text-[#1c7bc8] mb-2">{event.year}</div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h4>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose United Plumbing CCTX? */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose United Plumbing CCTX?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">50+ years of trusted service with licensed professionals and guaranteed workmanship</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Experienced Professionals */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-black font-semibold text-lg mb-3 text-center">Experienced Professionals</h3>
              <p className="text-gray-600 text-center">We have decades of experience solving all plumbing challenges, big or small.</p>
            </div>

            {/* 24/7 Emergency Services */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-black font-semibold text-lg mb-3 text-center">24/7 Emergency Services</h3>
              <p className="text-gray-600 text-center">No hidden fees or surprise charges. Our pricing is transparent and budget-friendly.</p>
            </div>

            {/* Licensed and Insured */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-black font-semibold text-lg mb-3 text-center">Licensed and Insured</h3>
              <p className="text-gray-600 text-center">Our dedicated team of plumbers are fully licensed and insured for your peace of mind.</p>
            </div>

            {/* Reliable and Trustworthy */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-black font-semibold text-lg mb-3 text-center">Reliable and Trustworthy</h3>
              <p className="text-gray-600 text-center">We pride ourselves on honest, dependable service you can rely on every time.</p>
            </div>

            {/* Affordable Pricing */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-black font-semibold text-lg mb-3 text-center">Affordable Pricing</h3>
              <p className="text-gray-600 text-center">Our quality plumbing solutions are fairly priced to give you the best value.</p>
            </div>

            {/* Customer Satisfaction Guaranteed */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-black font-semibold text-lg mb-3 text-center">Customer Satisfaction Guaranteed</h3>
              <p className="text-gray-600 text-center">We're committed to top-notch service and complete customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Serving Communities Across the United States</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential repairs to commercial installations throughout the USA, we're your trusted plumbing partner
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { state: 'California', cities: 'Los Angeles, San Francisco, San Diego' },
              { state: 'New York', cities: 'New York City, Buffalo, Rochester' },
              { state: 'Texas', cities: 'Houston, Dallas, Austin' },
              { state: 'Florida', cities: 'Miami, Orlando, Tampa' },
              { state: 'Illinois', cities: 'Chicago, Springfield, Peoria' },
              { state: 'Ohio', cities: 'Columbus, Cleveland, Cincinnati' },
              { state: 'Pennsylvania', cities: 'Philadelphia, Pittsburgh, Harrisburg' },
              { state: 'Michigan', cities: 'Detroit, Grand Rapids, Lansing' }
            ].map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl mb-4">📍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{area.state}</h3>
                <p className="text-gray-600 text-sm">{area.cities}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/locations"
              className="inline-flex items-center bg-[#1c7bc8] hover:bg-[#0f5a9e] text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View All Service Areas
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
