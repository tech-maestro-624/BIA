import { ArrowLeft, ArrowRight, Plus } from 'lucide-react'

const Certification = () => {
  return (
    <section 
      className="bg-white py-16 lg:py-20 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/src/assets/certification/background.webp')"
      }}
    >
      {/* Background overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-white/90"></div> */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-2">
            <ArrowLeft size={20} className="text-[#000069] sm:hidden" />
            <ArrowLeft size={24} className="text-[#000069] hidden sm:block" />
            <span className="text-xs sm:text-sm font-semibold text-[#000069] tracking-wide uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              CERTIFICATION
            </span>
            <ArrowRight size={20} className="text-[#000069] sm:hidden" />
            <ArrowRight size={24} className="text-[#000069] hidden sm:block" />
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            BIA<sup className="text-lg sm:text-xl md:text-2xl lg:text-3xl">®</sup> Dual Certification In Two Most<br className="hidden sm:block" />
            <span className="block sm:inline"> In-Demand And Highly Paid Skills</span>
          </h2>
        </div>

        {/* Certificates Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-16 mb-12 lg:mb-16">
          
          {/* Data Science Certificate */}
          <div className="relative group">
            {/* Certificate Header */}
            <div className="bg-[#000069] text-white text-center py-4 px-8 rounded-t-2xl mb-0">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Data Science
              </h3>
            </div>
            
            {/* Certificate Image */}
            <div className="relative overflow-hidden rounded-b-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300">
              <img 
                src="/src/assets/certification/cert1.webp"
                alt="Data Science Certificate"
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-auto transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Plus Icon */}
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[#000069] rounded-full flex items-center justify-center">
              <Plus size={24} className="text-white sm:hidden" />
              <Plus size={32} className="text-white hidden sm:block lg:hidden" />
              <Plus size={40} className="text-white hidden lg:block" />
            </div>
          </div>

          {/* Artificial Intelligence Certificate */}
          <div className="relative group">
            {/* Certificate Header */}
            <div className="bg-[#000069] text-white text-center py-4 px-8 rounded-t-2xl mb-0">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Artificial Intelligence
              </h3>
            </div>
            
            {/* Certificate Image */}
            <div className="relative overflow-hidden rounded-b-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300">
              <img 
                src="/src/assets/certification/cert2.webp"
                alt="Artificial Intelligence Certificate"
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-auto transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-sm lg:text-base flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 shadow-lg mx-auto" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            ENQUIRE NOW
            <ArrowRight size={16} className="sm:hidden" />
            <ArrowRight size={18} className="hidden sm:block" />
          </button>
        </div>

        {/* Additional Info Section
        <div className="mt-16 lg:mt-20">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-[#000069] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-xl" style={{ fontFamily: 'Rajdhani, sans-serif' }}>®</span>
                </div>
                <h4 className="text-lg lg:text-xl font-bold text-gray-900" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  Globally Recognized
                </h4>
                <p className="text-gray-600 text-sm lg:text-base">
                  Industry-recognized certifications accepted worldwide by top employers
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-[#000069] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-xl" style={{ fontFamily: 'Rajdhani, sans-serif' }}>2</span>
                </div>
                <h4 className="text-lg lg:text-xl font-bold text-gray-900" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  Dual Certification
                </h4>
                <p className="text-gray-600 text-sm lg:text-base">
                  Get certified in both Data Science and AI - two most demanding skills
                </p>
              </div>

              <div className="space-y-4 md:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 bg-[#000069] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-xl" style={{ fontFamily: 'Rajdhani, sans-serif' }}>✓</span>
                </div>
                <h4 className="text-lg lg:text-xl font-bold text-gray-900" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  Career Ready
                </h4>
                <p className="text-gray-600 text-sm lg:text-base">
                  Certificates that validate your skills and boost your career prospects
                </p>
              </div>

            </div>
          </div>
        </div> */}

      </div>
    </section>
  )
}

export default Certification 