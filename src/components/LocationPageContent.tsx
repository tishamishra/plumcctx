import Header from '@/components/Header';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  location: string;
  text: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Location {
  id: string;
  name: string;
  state: string;
  fullName: string;
  heroTitle: string;
  heroSubtitle: string;
  phone: string;
  services: Service[];
  areas: string[];
  testimonials?: Testimonial[];
  faqs?: FAQ[];
}

interface LocationPageContentProps {
  location: Location;
}

export default function LocationPageContent({ location }: LocationPageContentProps) {
  if (!location) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="relative py-20 px-4 min-h-[600px] flex items-center">
        {/* Background Image */}
        <img 
          src="/hero-bg.png"
          alt="Plumbing background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            {location.heroTitle}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
            {location.heroSubtitle}
          </p>
          <div className="flex justify-center">
            <a 
              href={`tel:${location.phone.replace(/\D/g, '')}`}
              className="bg-white text-blue-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl"
            >
              Call {location.phone}
            </a>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Plumbing Services in {location.name}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {location.services.map((service: Service, index: number) => (
            <div key={`service-${location.id}-${index}`} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Service Areas */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            We Serve These Areas in {location.name}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {location.areas.slice(0, 24).map((area: string, index: number) => (
              <div key={`area-${location.id}-${index}`} className="bg-gray-50 rounded-lg p-4 text-center">
                <span className="text-gray-800 font-medium text-sm">{area}</span>
              </div>
            ))}
          </div>
          {location.areas.length > 24 && (
            <div className="text-center mt-8">
              <p className="text-gray-600">And many more areas in {location.name}...</p>
            </div>
          )}
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Why Choose United Plumbing CCTX in {location.name}?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 text-blue-700 rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Emergency Service</h3>
            <p className="text-gray-600">Available round the clock for urgent plumbing emergencies in {location.name}.</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 text-blue-700 rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
            <p className="text-gray-600">All our plumbers are licensed, bonded, and insured for your protection.</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 text-blue-700 rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
            <p className="text-gray-600">No hidden fees. Get upfront pricing before we start any work.</p>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      {location.testimonials && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              What Our Customers Say in {location.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {location.testimonials.map((testimonial: Testimonial, index: number) => (
                <div key={`testimonial-${location.id}-${index}`} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xl font-bold">
                      {testimonial.name[0]}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">&ldquo;{testimonial.text}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* FAQ Section */}
      {location.faqs && (
        <section className="py-16 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {location.faqs.map((faq: FAQ, index: number) => (
              <div key={`faq-${location.id}-${index}`} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Call us now for fast, reliable plumbing services in {location.fullName}.</p>
          <div className="flex justify-center">
            <a 
              href={`tel:${location.phone.replace(/\D/g, '')}`}
              className="bg-white text-blue-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition"
            >
              Call {location.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 