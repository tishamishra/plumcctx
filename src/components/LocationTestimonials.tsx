'use client';

import { useState, useEffect } from 'react';

interface LocationTestimonialsProps {
  cityName?: string;
  stateName?: string;
}

export default function LocationTestimonials({ }: LocationTestimonialsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3); // 3 slides total
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  // Natural, authentic testimonials without repetitive city mentions
  const testimonials = [
    // Slide 1
    [
      {
        name: "Sarah Johnson",
        text: "United Plumbing CCTX saved us during a major pipe burst. Their emergency response was incredible - they arrived within 30 minutes and fixed everything professionally. Couldn't be happier with their service!",
        rating: 5
      },
      {
        name: "Michael Chen",
        text: "We've been using United Plumbing CCTX for our office building maintenance for over 10 years. Their reliability and expertise are unmatched. They always show up on time and get the job done right.",
        rating: 5
      },
      {
        name: "Lisa Rodriguez",
        text: "The team installed our new water heater perfectly. Professional, clean, and reasonably priced. They took the time to explain everything and made sure we were completely satisfied.",
        rating: 5
      },
    ],
    // Slide 2
    [
      {
        name: "David Martinez",
        text: "Outstanding service! They fixed our complex drainage issue in record time. Professional, punctual, and reasonably priced. Highly recommend them to anyone needing plumbing work.",
        rating: 5
      },
      {
        name: "Jennifer Wilson",
        text: "United Plumbing CCTX has been maintaining our restaurant's plumbing for 5 years. They're reliable, fast, and always professional. They understand that downtime costs money and work efficiently.",
        rating: 5
      },
      {
        name: "Robert Thompson",
        text: "They handle all our emergency calls efficiently. Their team is skilled, professional, and always available when we need them. We trust them completely with all our plumbing needs.",
        rating: 5
      },
    ],
    // Slide 3
    [
      {
        name: "Amanda Foster",
        text: "Excellent work on our bathroom remodel. The team was professional, clean, and completed the job on time. They transformed our outdated bathroom into something beautiful and functional.",
        rating: 5
      },
      {
        name: "Carlos Rodriguez",
        text: "Fast response time and excellent work quality. They fixed our plumbing emergency within hours. Very reliable service and fair pricing. Will definitely call them again!",
        rating: 5
      },
      {
        name: "Emily Davis",
        text: "United Plumbing CCTX has been our go-to for all properties. Consistent quality, fair pricing, and exceptional service. They treat every job like it's their own home.",
        rating: 5
      },
    ]
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1c7bc8] rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Trusted by thousands of satisfied customers since 1973</p>
        </div>
        
        {/* Testimonials Slider */}
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {testimonials.map((slide, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {slide.map((testimonial, index) => (
                    <div key={`slide${slideIndex}-${index}`} className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1c7bc8] to-[#0f5a9e] rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                      <div className="relative bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="flex items-center mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          ))}
                        </div>
                        <div className="text-[#1c7bc8] text-4xl mb-4">"</div>
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">{testimonial.text}</p>
                        <div className="flex items-center">
                          <div>
                            <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                          </div>
                        </div>
                        <div className="absolute top-4 right-4 text-[#1c7bc8] opacity-20">
                          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {[0, 1, 2].map((slide) => (
              <button
                key={slide}
                onClick={() => setCurrentSlide(slide)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === slide ? 'bg-[#1c7bc8] scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 