import { ArrowRight, Users, Award, TrendingUp } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Talk to our Expert Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 text-balance">
                Talk to our Expert
              </h2>
              <p className="text-lg text-gray-600 text-balance">
                Get personalized guidance from industry experts. Our team will help you 
                choose the right program and career path in data science and AI.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">Free career counseling session</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">Personalized learning roadmap</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">Industry insights and trends</span>
              </div>
            </div>

            <div className="pt-4">
              <a href="#contact" className="btn-primary">
                <span>Schedule Consultation</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </div>

          <div className="relative">
            {/* Placeholder for expert consultation image */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="aspect-[4/3] bg-gray-100 rounded-xl flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users size={32} />
                  </div>
                  <div className="text-lg font-semibold">Expert Consultation</div>
                  <div className="text-sm">Placeholder for consultation image</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Program Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-md card-hover text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="text-primary-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Industry-Recognized Certification
            </h3>
            <p className="text-gray-600">
              Earn certificates that are valued by top tech companies and boost your career prospects.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md card-hover text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-orange-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Expert Mentorship
            </h3>
            <p className="text-gray-600">
              Learn from industry professionals with years of experience in data science and AI.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md card-hover text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Career Growth
            </h3>
            <p className="text-gray-600">
              95% of our graduates secure high-paying positions in leading technology companies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 