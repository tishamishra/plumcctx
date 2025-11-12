import { PhoneIcon } from '@heroicons/react/24/solid'

export default function FloatingCTA({ phone = '8336090936', locationName = '' }: { phone?: string, locationName?: string }) {
  return (
    <>
      {/* Desktop Floating CTA - Full Banner */}
      <div className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-4 z-20 hidden md:block">
        <div className="bg-red-600 rounded-xl shadow-lg py-4 px-6 flex flex-col sm:flex-row items-center gap-4 text-white">
          {/* Left Column - Icon Only */}
          <div className="flex items-center justify-center sm:justify-start gap-4">
            <div className="relative -mt-12 md:-mt-16">
              {/* Your plumber image - positioned to extend above the CTA banner */}
              <img 
                src="/plumber-icon.png" 
                alt="Professional Plumber" 
                className="w-20 h-28 md:w-24 md:h-32 object-contain"
              />
            </div>
          </div>

          {/* Main Message - Simple line near plumber */}
          <div className="text-left ml-4 flex-1">
            <h3 className="font-bold text-lg md:text-xl text-white leading-tight mb-2 tracking-wide">
              24/7 Emergency Plumbing Services {locationName ? `in ${locationName}` : ''}
            </h3>
            <p className="text-sm md:text-base text-white/90 font-semibold leading-relaxed">
              Fast, Reliable & Affordable plumbing services near you!
            </p>
          </div>

          {/* Right Column - Phone CTA Button */}
          <div className="flex justify-center sm:justify-center ml-8">
            <a
              href={`tel:${phone.replace(/\D/g, '')}`}
              className="group flex items-center gap-3 bg-gradient-to-r from-orange-900 via-orange-800 to-orange-900 hover:from-orange-800 hover:via-orange-700 hover:to-orange-800 text-white font-bold text-sm md:text-base px-6 py-3 md:px-8 md:py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-orange-700/30"
            >
              <PhoneIcon className="h-5 w-5 md:h-6 md:w-6 text-white group-hover:scale-110 transition-transform duration-300" />
              <span className="font-bold tracking-wide">({phone.slice(0,3)}) {phone.slice(3,6)}-{phone.slice(6)}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Call Button Only */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-full px-4 z-20 md:hidden">
        <div className="flex justify-center">
          <a
            href={`tel:${phone.replace(/\D/g, '')}`}
            className="group flex items-center gap-3 bg-gradient-to-r from-orange-900 via-orange-800 to-orange-900 hover:from-orange-800 hover:via-orange-700 hover:to-orange-800 text-white font-bold text-base px-6 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-orange-700/30"
          >
            <PhoneIcon className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
            <span className="font-bold tracking-wide">({phone.slice(0,3)}) {phone.slice(3,6)}-{phone.slice(6)}</span>
          </a>
        </div>
      </div>
    </>
  )
} 