import { ArrowLeft, ArrowRight, Check, Download } from 'lucide-react'

const KeyHighlights = () => {
  const keyHighlights = [
    "Immersive Data Science Course Training Classroom Experience",
    "Hands-On Training By Industry Experts",
    "15+ Industry Case Studies And Assignments",
    "Data Science Course Modules Integrated With Generative AI",
    "Exclusive Data Science Job Opportunities Portal",
    "BIA® Alumni Status",
    "Globally Recognized Dual Certification"
  ]

  const additionalHighlights = [
    "Real World Projects And Case Studies",
    "In-Person Career Mentorship Sessions (1:1)",
    "200+ Hours Of Learning & Practical Exercises",
    "360 Degree Career Support",
    "Live Data Science Course BIA® DoubtBuster Sessions",
    "350+ Corporate Partners",
    "Immersive Plus Online Blended Learning",
    "Practical Hands-On Capstone Projects",
    "In-Person Job Interview Preparation (1:1)",
    "30+ Programming Tools & Technologies",
    "Access To Top MNCs",
    "No Cost EMI Options Available"
  ]

  return (
    <section className="bg-gray-50 py-16 lg:py-20 relative">
      {/* Hand Icon - Left edge, vertically centered */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
        <img 
          src="/src/assets/key-highlights/hand.png" 
          alt="Hand pointing" 
          className="w-16 h-16 lg:w-20 lg:h-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Key Highlights Badge */}
        <div className="flex items-center justify-start mb-8">
          <div className="flex items-center gap-2">
            <ArrowLeft size={24} className="text-[#000069]" />
            <span className="text-sm font-semibold text-[#000069] tracking-wide uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              KEY HIGHLIGHTS
            </span>
            <ArrowRight size={24} className="text-[#000069]" />
          </div>
        </div>

        {/* Main Content Grid - 3 columns: 40-30-30 */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12 mb-16">
          {/* Column 1: Main Content (40%) */}
          <div className="lg:col-span-4 space-y-8">
            <h2 className="text-3xl lg:text-4xl xl:text-4xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Guaranteed Placements,<br />
              Only 15 Students Per Batch,<br />
              <span className="text-[#000069]">Offline Training Available</span>
            </h2>
            
            <p className="text-sm text-gray-600 leading-relaxed">
              Kickstart your career in Data Science and Artificial Intelligence with our 
              globally recognized dual certification program. Experience hands-on 
              learning through real-world projects, 1:1 career mentorship, and 200+ 
              hours of practical training. Gain in-demand skills with modules 
              integrated with Generative AI and access job opportunities via our 
              exclusive portal. Join 15,000+ learners and connect with 350+ 
              corporate partners for a future-ready career.
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-sm lg:text-base flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 shadow-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              GET STARTED NOW
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Column 2: Blue Card (30%) */}
          <div className="lg:col-span-3">
            <div className="bg-[#000069] rounded-3xl p-6 lg:p-8 text-white relative overflow-hidden">
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="/src/assets/key-highlights/icon.png" 
                  alt="Key highlights icon" 
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-xl font-bold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    Explore Our
                  </h3>
                  <h4 className="text-lg font-semibold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    Key Highlights
                  </h4>
                </div>
              </div>
            </div>

            {/* Key Highlights List - Below the card */}
            <div className="mt-6 space-y-3">
              {keyHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Additional Highlights (30%) */}
          <div className="lg:col-span-3">
            <div className="space-y-3">
              {additionalHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      
    
      </div>
    </section>
  )
}

export default KeyHighlights 