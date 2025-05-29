import { useState } from 'react'
import { ArrowRight, Download, Check } from 'lucide-react'
import Modal from './Modal'

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleDownloadBrochure = () => {
    // Create a link to download the brochure
    const link = document.createElement('a')
    link.href = '/BIA-Data-Science-Brochure.pdf'
    link.download = 'BIA-Data-Science-AI-Program-Brochure.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <section id="home" className="bg-gray-50 pt-8 pb-8 ">
        <div className="h-full px-4 lg:px-8">
          {/* Rounded Hero Container */}
          <div 
            className="rounded-3xl lg:rounded-[2.5rem] h-auto min-h-[90vh] lg:h-[93vh] relative overflow-hidden shadow-2xl"
            style={{ backgroundColor: '#000069' }}
          >
            {/* Background Shape behind graduate image */}
            <div className="hidden md:block absolute inset-0 overflow-hidden">
              <img 
                src="/src/assets/hero/shape.png" 
                alt="Background Shape" 
                className="absolute right-0 bottom-0 h-[60%] w-auto object-cover opacity-90"
              />
            </div>

            <div className="relative z-10 px-6 lg:px-16 py-8 lg:py-12 h-full">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 h-full">
                {/* Content */}
                <div className="text-white space-y-4 lg:space-y-6 flex flex-col justify-center">
                  {/* Badge */}
                  <div className="mt-4 md:mt-0 inline-block w-auto">
                    <div className="border border-white/30 rounded-full px-6 py-3">
                      <span className="text-white font-medium text-xs lg:text-sm tracking-wide" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        BOSTON INSTITUTE OF ANALYTICS
                      </span>
                    </div>
                  </div>

                  {/* Main Heading */}
                  <div className="space-y-3 lg:space-y-4">
                    <h1 className="text-3xl lg:text-5xl xl:text-5xl font-bold leading-[1.1] tracking-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      Data Science And<br />
                      <span className="text-white">Artificial Intelligence</span>
                    </h1>
                    
                    <p className="text-sm lg:text-sm xl:text-md text-white/90 max-w-2xl leading-relaxed font-light">
                      Master Data Science and Generative AI with this top-rated program by BIA® —ranked #1 
                      internationally by British Columbia Times and Business World. Gain hands-on experience in 
                      Python, Machine Learning, NLP, Transformers, MLOps, and Business Intelligence Tools. Learn 
                      through capstone projects, expert-led masterclasses, and 4.9-star rated DoubtBuster 
                      sessions.
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-bold text-sm lg:text-base flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl transform-gpu"
                      style={{ fontFamily: 'Rajdhani, sans-serif' }}
                    >
                      ENQUIRE NOW
                      <ArrowRight size={18} />
                    </button>
                    <button 
                      onClick={handleDownloadBrochure}
                      className="border-2 border-white text-white hover:bg-white hover:text-bia-blue px-6 lg:px-8 py-3 lg:py-4 rounded-full font-bold text-sm lg:text-base flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1" 
                      style={{ fontFamily: 'Rajdhani, sans-serif' }}
                    >
                      DOWNLOAD BROCHURE
                      <Download size={18} />
                    </button>
                  </div>

                  {/* Achievement Points */}
                  <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/20 max-w-lg shadow-xl">
                    <div className="space-y-3 lg:space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 lg:w-6 lg:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                          <Check size={12} className="lg:hidden text-white" />
                          <Check size={14} className="hidden lg:block text-white" />
                        </div>
                        <span className="text-white font-semibold text-sm lg:text-base" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Ranked #1 International Training Institute</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 lg:w-6 lg:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                          <Check size={12} className="lg:hidden text-white" />
                          <Check size={14} className="hidden lg:block text-white" />
                        </div>
                        <span className="text-white font-semibold text-sm lg:text-base" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Rated 4.9/5 by 15K+ Students</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 lg:w-6 lg:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                          <Check size={12} className="lg:hidden text-white" />
                          <Check size={14} className="hidden lg:block text-white" />
                        </div>
                        <span className="text-white font-semibold text-sm lg:text-base" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Learn Advanced Machine Learning and GenerativeAI</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Section */}
                <div className="hidden lg:flex items-end justify-center lg:justify-end mt-8 lg:mt-0">
                  {/* Graduate Image positioned at bottom */}
                  <div className="relative z-20">
                    <img 
                      src="/src/assets/hero/graduate.webp" 
                      alt="BIA Graduate Student" 
                      className="w-full max-w-xs lg:max-w-md xl:max-w-lg h-auto object-contain object-bottom"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Rotating bottom decorative element */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <img 
                src="/src/assets/hero/posthero.png" 
                alt="Post Hero Element" 
                className="w-auto h-12 lg:h-16 opacity-60 animate-spin"
                style={{ animationDuration: '10s' }}
              />
            </div>

            {/* Scroll Indicator positioned over the rotating element */}
            <div className="absolute bottom-12 right-8">
              <div className="w-10 h-10 lg:w-12 lg:h-12 border-2 border-white/30 rounded-full flex items-center justify-center animate-bounce shadow-lg backdrop-blur-sm">
                <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-white rounded-full"></div>
              </div>
              <div className="text-white text-[9px] lg:text-[10px] mt-2 text-center font-medium" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                EXPLORE MORE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Talk To Our Expert"
      />
    </>
  )
}

export default Hero 