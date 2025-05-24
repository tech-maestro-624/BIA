import { ArrowRight, Download, Check } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="bg-gray-50 pt-8 pb-8">
      <div className="h-full px-4 lg:px-8">
        {/* Rounded Hero Container */}
        <div 
          className="rounded-3xl lg:rounded-[2.5rem] h-[93vh] relative overflow-hidden shadow-2xl"
          style={{ backgroundColor: '#000069' }}
        >
          {/* Background Shape behind graduate image */}
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="/src/assets/hero/shape.png" 
              alt="Background Shape" 
              className="absolute right-0 bottom-0 h-[60%] w-auto object-cover opacity-90"
            />
          </div>

          <div className="relative z-10 px-6 lg:px-16 py-8 lg:py-12 h-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 h-full">
              {/* Content */}
              <div className="text-white space-y-6 flex flex-col justify-center">
                {/* Badge */}
                <div className="inline-block w-auto">
                  <div className="border border-white/30 rounded-full px-6 py-3">
                    <span className="text-white font-medium text-xs lg:text-sm tracking-wide" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      BOSTON INSTITUTE OF ANALYTICS
                    </span>
                  </div>
                </div>

                {/* Main Heading */}
                <div className="space-y-4">
                  <h1 className="text-3xl lg:text-5xl xl:text-5xl font-bold leading-[1.1] tracking-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    Data Science And<br />
                    <span className="text-white">Artificial Intelligence</span>
                  </h1>
                  
                  <p className="text-base lg:text-sm xl:text-md text-white/90 max-w-2xl leading-relaxed font-light">
                    Master Data Science and Generative AI with this top-rated program by BIA® —ranked #1 
                    internationally by British Columbia Times and Business World. Gain hands-on experience in 
                    Python, Machine Learning, NLP, Transformers, MLOps, and Business Intelligence Tools. Learn 
                    through capstone projects, expert-led masterclasses, and 4.9-star rated DoubtBuster 
                    sessions.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#contact" 
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-sm lg:text-base flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl transform-gpu"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    ENQUIRE NOW
                    <ArrowRight size={18} />
                  </a>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-bia-blue px-8 py-4 rounded-full font-bold text-sm lg:text-base flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    DOWNLOAD BROCHURE
                    <Download size={18} />
                  </button>
                </div>

                {/* Achievement Points */}
                <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-lg shadow-xl">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-white font-semibold text-sm lg:text-base" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Ranked #1 International Training Institute</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-white font-semibold text-sm lg:text-base" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Rated 4.9/5 by 15K+ Students</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-white font-semibold text-sm lg:text-base" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Learn Advanced Machine Learning and GenerativeAI</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="relative flex items-end justify-center lg:justify-end">
                {/* Graduate Image positioned at bottom */}
                <div className="relative z-20">
                  <img 
                    src="/src/assets/hero/graduate.webp" 
                    alt="BIA Graduate Student" 
                    className="w-full max-w-sm lg:max-w-md xl:max-w-lg h-auto object-contain object-bottom"
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
              className="w-auto h-16 opacity-60 animate-spin"
              style={{ animationDuration: '10s' }}
            />
          </div>

          {/* Scroll Indicator positioned over the rotating element */}
          <div className="absolute bottom-12 right-8">
            <div className="w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center animate-bounce shadow-lg backdrop-blur-sm">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="text-white text-[10px] mt-2 text-center font-medium" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              EXPLORE MORE
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 