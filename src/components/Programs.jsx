import { useState } from 'react'
import { FileText, Award, Target, Users, ArrowLeft, ArrowRight, GraduationCap, BookOpen, Globe, TrendingUp, Shield } from 'lucide-react'

const Programs = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const highlights = [
    {
      icon: <GraduationCap size={32} className="text-[#000069]" />,
      title: "Dual Certification: Data Science & Artificial Intelligence",
      description: "The Two Most In-Demand and Highly Paid Skills"
    },
    {
      icon: <Award size={32} className="text-[#000069]" />,
      title: "Ranked #1 International Training Institute",
      description: "In 2023, by British Columbia Times, Business World & Others"
    },
    {
      icon: <Target size={32} className="text-[#000069]" />,
      title: "3 Learning Paths",
      description: "Data Science Certification (4 Months) | Data Science Diploma (6 Months) | Data Science Master Diploma (10 Months)"
    },
    {
      icon: <Users size={32} className="text-[#000069]" />,
      title: "15000+ Learners",
      description: "Data Science & AI Trained Students Across 105+ Campus in 7+ Countries"
    },
    {
      icon: <Globe size={32} className="text-[#000069]" />,
      title: "360° Career Support",
      description: "Complete Career Guidance from Resume Building to Interview Preparation and Job Placement"
    },
    {
      icon: <BookOpen size={32} className="text-[#000069]" />,
      title: "Industry-Ready Curriculum",
      description: "Designed by Industry Experts with Real-world Projects and Case Studies"
    },
    {
      icon: <TrendingUp size={32} className="text-[#000069]" />,
      title: "98% Success Rate",
      description: "Our Students Successfully Transition to High-Paying Data Science Roles"
    },
    {
      icon: <Shield size={32} className="text-[#000069]" />,
      title: "Lifetime Access",
      description: "Get Lifetime Access to Course Materials and Community Support"
    }
  ]

  const cardsPerView = 4
  const maxIndex = Math.max(0, highlights.length - cardsPerView)

  const handlePrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1))
  }

  const visibleHighlights = highlights.slice(currentIndex, currentIndex + cardsPerView)

  return (
    <section id="programs" className="bg-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          {/* Course Highlights Badge */}
          <div className="flex items-start justify-start mb-6">
            <div className="flex items-center gap-2">
              <ArrowLeft size={24} className="text-[#000069]" />
              <span className="text-sm font-semibold text-[#000069] tracking-wide uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                COURSE HIGHLIGHTS
              </span>
              <ArrowRight size={24} className="text-[#000069]" />
            </div>
          </div>

          {/* Main Heading */}
          <div className="flex items-start justify-between">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#0F0D1D] max-w-xl leading-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Program Highlights & Global Recognition
            </h2>
            
            {/* Navigation Arrows */}
            <div className="hidden lg:flex items-center gap-3">
              <button 
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="w-[48px] h-[48px] rounded-[24px] border border-[#D4DCFF] bg-white flex items-center justify-center hover:border-[#000069] hover:text-[#000069] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-[0px_4px_25px_rgba(56,75,255,0.08)]"
              >
                <ArrowLeft size={16} />
              </button>
              <button 
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className="w-[48px] h-[48px] rounded-[24px] bg-[#000069] text-white flex items-center justify-center hover:bg-[#000069]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-[0px_4px_25px_rgba(56,75,255,0.08)]"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {visibleHighlights.map((highlight, index) => (
            <div key={currentIndex + index} className="bg-[#F3F7FB] border border-[#D4DCFF] rounded-2xl p-4 lg:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-full h-auto">
              {/* Icon Container */}
              <div className="w-12 h-12 lg:w-14 lg:h-14 border border-[#D4DCFF] rounded-lg flex items-center justify-center mb-4">
                {highlight.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg lg:text-xl font-bold text-[#0F0D1D] mb-3 leading-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                {highlight.title}
              </h3>

              {/* Description */}
              <p className="text-sm lg:text-base text-[#445375] leading-6 font-normal">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center justify-center gap-3 mt-6">
          <button 
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="w-10 h-10 rounded-full border-2 border-[#D4DCFF] flex items-center justify-center hover:border-[#000069] hover:text-[#000069] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft size={16} />
          </button>
          <button 
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="w-10 h-10 rounded-full bg-[#000069] text-white flex items-center justify-center hover:bg-[#000069]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-[#000069]' : 'bg-[#D4DCFF]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs 