import { useState } from 'react'
import { ChevronDown, ChevronUp, ArrowLeft, ArrowRight } from 'lucide-react'

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(2) // Third question open by default to match screenshot

  const faqs = [
    {
      question: "What Is Data Science And Why Is It Important?",
      answer: "Data Science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data. It's important because it helps organizations make data-driven decisions, predict trends, and solve complex business problems."
    },
    {
      question: "What Skills Are Essential For A Career In Data Science?",
      answer: "Essential skills include programming (Python, R), statistics and mathematics, machine learning, data visualization, SQL databases, domain expertise, and strong analytical and communication skills to interpret and present findings effectively."
    },
    {
      question: "What Tools & Technologies Will I Learn In The Data Science Training Course?",
      answer: "A comprehensive Data Science course typically covers tools and technologies such as Python or R for programming, libraries like Pandas for data manipulation, Scikit-learn for machine learning, and visualization tools like Matplotlib or Tableau."
    },
    {
      question: "What Are The Prerequisites For A Data Science Course In India?",
      answer: "Basic knowledge of mathematics and statistics is helpful. Programming experience is beneficial but not mandatory as most courses start with fundamentals. A bachelor's degree in any field is typically required, though some programs accept candidates with relevant work experience."
    }
  ]

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-2">
            <ArrowLeft size={20} className="text-[#000069] sm:hidden" />
            <ArrowLeft size={24} className="text-[#000069] hidden sm:block" />
            <span className="text-xs sm:text-sm font-semibold text-[#000069] tracking-wide uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              FAQ
            </span>
            <ArrowRight size={20} className="text-[#000069] sm:hidden" />
            <ArrowRight size={24} className="text-[#000069] hidden sm:block" />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
          
          {/* Left Side - Images */}
          <div className="space-y-6">
            {/* Top Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img 
                src="/src/assets/faqs/thumb.webp"
                alt="Data Science Learning"
                className="w-full h-auto"
              />
            </div>
            
            {/* Bottom Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img 
                src="/src/assets/faqs/Img - thumb_mask-group.webp"
                alt="Data Science Team"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Side - FAQ Content */}
          <div>
            {/* FAQ Heading */}
            <div className="mb-8 lg:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Frequently Asked Questions<br />
                <span className="text-[#000069]">On Data Science Course</span>
              </h2>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
                  <button
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-base lg:text-lg font-semibold text-gray-900 pr-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-[#000069]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#000069]" />
                      )}
                    </div>
                  </button>
                  
                  {openFaq === index && (
                    <div className="px-6 pb-5 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default FAQ 