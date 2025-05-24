import { ArrowLeft, ArrowRight } from 'lucide-react'

const WhyChooseUs = () => {
  const reasons = [
    {
      number: "01",
      title: "Trusted by Thousands",
      description: "With a proven track record, BIA has shaped successful careers for thousands of professionals across India and globally."
    },
    {
      number: "02", 
      title: "Expert Faculty",
      description: "Learn from top industry trainers with 15+ years of hands-on experience in Data Science and AI technologies."
    },
    {
      number: "03",
      title: "Dual Certification Advantage", 
      description: "Gain industry-recognized certifications that add significant value to your professional profile and career prospects."
    },
    {
      number: "04",
      title: "Guaranteed Placement Support",
      description: "Benefit from 350+ hiring partners, a dedicated placement team, and comprehensive career support services."
    }
  ]

  return (
    <section className="bg-[#000069] relative mt-20 md:mt-32 lg:mt-40">
      {/* Hero Image - Floating with absolute positioning */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="relative -mt-10 sm:-mt-16 md:-mt-20 lg:-mt-32">
                <img 
                  src="/src/assets/whychoose/indian-four-people-kitchen-looking-laptop-discussing-homework-distance-learning.webp"
                  alt="Students learning together"
                  className="w-full max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl h-auto rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative z-20 pt-48 sm:pt-64 md:pt-72 lg:pt-80 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <div className="flex items-center gap-2">
                <ArrowLeft size={20} className="text-white sm:hidden" />
                <ArrowLeft size={24} className="text-white hidden sm:block" />
                <span className="text-xs sm:text-sm font-semibold text-white tracking-wide uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  WHY CHOOSE US
                </span>
                <ArrowRight size={20} className="text-white sm:hidden" />
                <ArrowRight size={24} className="text-white hidden sm:block" />
              </div>
            </div>

            {/* Main Heading and CTA */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 sm:mb-16 gap-6 lg:gap-8">
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  Why Should You Choose Boston Institute Of Analytics
                  <br className="hidden sm:block" />
                  <span className="block sm:inline"> </span>
                  <span className="text-orange-400">For Data Science Course In India?</span>
                </h2>
              </div>
              <div className="flex-shrink-0 w-full lg:w-auto">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm lg:text-base flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 shadow-lg w-full lg:w-auto" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  ENQUIRE NOW
                  <ArrowRight size={16} className="sm:hidden" />
                  <ArrowRight size={18} className="hidden sm:block" />
                </button>
              </div>
            </div>

            {/* Reasons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
              {reasons.map((reason, index) => (
                <div key={index} className="text-white text-center sm:text-left">
                  {/* Number */}
                  <div className="mb-4 sm:mb-6">
                    <span 
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-none" 
                      style={{ 
                        fontFamily: 'Rajdhani, sans-serif',
                        color: 'transparent',
                        WebkitTextStroke: '2px rgb(255, 255, 255)',
                        textStroke: '2px rgb(255, 255, 255)'
                      }}
                    >
                      {reason.number}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 leading-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    {reason.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
