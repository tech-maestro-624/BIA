import { Star, ArrowLeft, ArrowRight, User } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aryan Sharma",
      rating: 4,
      testimonial: "Enrolling in BIA's Data Science course was a game-changer for my career. The comprehensive curriculum and hands-on projects equipped me with the skills I needed to excel in this rapidly evolving field of artificial intelligence. The instructors were knowledgeable and supportive, making the learning experience truly enriching.",
      isCenter: false
    },
    {
      name: "Nisha Patel", 
      rating: 4,
      testimonial: "I can confidently say that BIA's Data Science & AI course is worth every penny. The practical approach to learning with real-world applications, provided me with a solid foundation in data science. The data science course not only expanded my technical skills but also helped me land a rewarding job in the AI industry.",
      isCenter: true
    },
    {
      name: "Rajan Kapoor",
      rating: 4,
      testimonial: "BIA's Data Science course exceeded my expectations. The well-structured modules and insightful lectures made complex concepts easy to understand. The hands-on projects were challenging and allowed me to apply what I learned in a practical setting. I highly recommend this data science course to anyone looking to break into the world of data science.",
      isCenter: false
    }
  ]

  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-2">
            <ArrowLeft size={20} className="text-[#000069] sm:hidden" />
            <ArrowLeft size={24} className="text-[#000069] hidden sm:block" />
            <span className="text-xs sm:text-sm font-semibold text-[#000069] tracking-wide uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              TESTIMONIALS
            </span>
            <ArrowRight size={20} className="text-[#000069] sm:hidden" />
            <ArrowRight size={24} className="text-[#000069] hidden sm:block" />
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Student Reviews
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`rounded-3xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl ${
                testimonial.isCenter 
                  ? 'bg-[#000069] text-white' 
                  : 'bg-white text-gray-900'
              }`}
            >
              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${
                      i < testimonial.rating 
                        ? 'text-yellow-400 fill-current' 
                        : testimonial.isCenter 
                          ? 'text-gray-400' 
                          : 'text-gray-300'
                    }`} 
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <div className="mb-8">
                <p className={`leading-relaxed text-sm lg:text-base ${
                  testimonial.isCenter ? 'text-gray-100' : 'text-gray-600'
                }`}>
                  {testimonial.testimonial}
                </p>
              </div>

              {/* User Info */}
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                  testimonial.isCenter ? 'bg-white/20' : 'bg-orange-500'
                }`}>
                  <User className={`w-6 h-6 ${
                    testimonial.isCenter ? 'text-white' : 'text-white'
                  }`} />
                </div>
                <div>
                  <div className={`font-bold text-lg ${
                    testimonial.isCenter ? 'text-white' : 'text-gray-900'
                  }`} style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    {testimonial.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials 