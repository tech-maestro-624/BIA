import React from 'react'
import { Download } from 'lucide-react'

const Syllabus = () => {
  return (
    <div className="w-full flex justify-center mt-[10%]">
    {/* Syllabus Card */}
    <div className="bg-[#000069] w-4/5 rounded-3xl p-8 lg:p-12 text-white overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Syllabus For Data Science Course And Artificial Intelligence
          </h3>
          
          <p className="text-sm text-gray-200 leading-relaxed">
            Delve into 200+ hours of learning and hands-on exercises with our 
            expertly crafted content. Our data science course modules are always 
            up-to-date and seamlessly integrated with Generative AI. Developed 
            by top industry experts, this data science course ensures a cutting-edge learning experience.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-sm lg:text-base flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 shadow-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            DOWNLOAD BROCHURE
            <Download size={18} />
          </button>
        </div>

        {/* Right Content - Illustration */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Background circles for decoration */}
            <div className="absolute inset-0">
              <div className="w-32 h-32 bg-white/5 rounded-full absolute top-0 right-0"></div>
              <div className="w-24 h-24 bg-orange-500/20 rounded-full absolute bottom-0 left-0"></div>
            </div>
            
            {/* Placeholder for syllabus illustration */}
            {/* <div className="relative z-10 w-80 h-64 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-orange-500 rounded-xl mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-white/20 rounded w-3/4 mx-auto"></div>
                  <div className="h-3 bg-white/15 rounded w-1/2 mx-auto"></div>
                  <div className="h-3 bg-white/15 rounded w-2/3 mx-auto"></div>
                </div>
              </div>
            </div> */}
            <img src="/src/assets/key-highlights/vector.png" alt="Syllabus" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Syllabus