import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const Features = () => {
  const [activeTab, setActiveTab] = useState(1) // Default to "Your Roadmap to Learning"

  const tabs = [
    {
      id: 0,
      icon: "/src/assets/features/icons/Background+Shadow.png",
      title: "Topics That Will Keep You Engaged and Curious",
      content: {
        heading: "Engaging and Curious Learning Topics",
        description: "Explore fascinating topics in Data Science and AI that will keep you motivated throughout your learning journey. Our curriculum is designed to spark curiosity and maintain engagement with real-world applications.",
        highlights: [
          "Interactive Machine Learning Projects",
          "Real-World Data Analysis Cases",
          "Cutting-Edge AI Applications",
          "Industry Trend Analysis"
        ]
      }
    },
    {
      id: 1,
      icon: "/src/assets/features/icons/Background+Shadow (1).png",
      title: "Your Roadmap to Learning",
      content: {
        heading: "Globally Accredited Data Science Course In India",
        description: "Join India's most comprehensive Data Science course at Boston Institute of Analytics and master the entire Data Science lifecycle from basics to advanced AI. Gain industry-ready skills and become a highly sought-after professional with expert-led training and hands-on projects.",
        highlights: [
          "Structured Learning Path",
          "Milestone-Based Progress",
          "Expert Mentorship",
          "Practical Implementation"
        ]
      }
    },
    {
      id: 2,
      icon: "/src/assets/features/icons/Background+Shadow (2).png",
      title: "Ideal Candidates for Data Science Course",
      content: {
        heading: "Perfect Candidates for Data Science Success",
        description: "Our Data Science course is designed for ambitious professionals from diverse backgrounds. Whether you're a fresh graduate, working professional, or career changer, we provide the perfect foundation for your Data Science journey.",
        highlights: [
          "Fresh Graduates",
          "Working Professionals",
          "Career Changers",
          "Technical Enthusiasts"
        ]
      }
    },
    {
      id: 3,
      icon: "/src/assets/features/icons/Background+Shadow (3).png",
      title: "Minimum Eligibility for Data Science Course",
      content: {
        heading: "Simple Eligibility Requirements",
        description: "We believe in making Data Science accessible to everyone. Our course has minimal entry requirements, focusing more on your passion and commitment to learning rather than extensive prerequisites.",
        highlights: [
          "Basic Mathematics Knowledge",
          "Computer Literacy",
          "Passion for Learning",
          "Commitment to Practice"
        ]
      }
    },
    {
      id: 4,
      icon: "/src/assets/features/icons/Background+Shadow (4).png",
      title: "Job Opportunities After Data Science Course",
      content: {
        heading: "Exciting Career Opportunities Await",
        description: "Graduate into a world of endless possibilities with high-paying roles across industries. Our comprehensive training prepares you for in-demand positions in the rapidly growing Data Science field.",
        highlights: [
          "Data Scientist Roles",
          "Machine Learning Engineer",
          "AI Specialist Positions",
          "Business Intelligence Analyst"
        ]
      }
    },
    {
      id: 5,
      icon: "/src/assets/features/icons/Background+Shadow (5).png",
      title: "Industries That Are Hiring Data Scientists and AI Specialists",
      content: {
        heading: "Industries Actively Recruiting Data Scientists",
        description: "Data Science professionals are in high demand across various industries. From tech giants to healthcare organizations, every sector needs skilled data scientists to drive innovation and growth.",
        highlights: [
          "Technology & Software",
          "Healthcare & Pharma",
          "Finance & Banking",
          "E-commerce & Retail"
        ]
      }
    }
  ]

  const activeContent = tabs[activeTab].content

  return (
    <section id="features" className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Career Blueprint Badge */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-2">
            <ArrowLeft size={24} className="text-[#000069]" />
            <span className="text-sm font-semibold text-[#000069] tracking-wide uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              CAREER BLUEPRINT
            </span>
            <ArrowRight size={24} className="text-[#000069]" />
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-8" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Your Complete Guide To Data Science & AI Success
          </h2>
        </div>

        {/* Tabs */}
        <div className="w-full ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-6 rounded-2xl border-2 transition-all duration-300 text-center ${
                activeTab === tab.id
                  ? 'bg-[#000069] text-white border-[#000069]'
                  : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-[#000069] hover:bg-gray-100'
              }`}
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="w-32 h-32 flex items-center justify-center">
                  <img 
                    src={tab.icon} 
                    alt={tab.title}
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <span className="text-sm font-semibold leading-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {tab.title}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              {/* Background Shape */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="/src/assets/features/shape.png" 
                  alt="Background shape" 
                  className="w-full h-full object-cover opacity-20"
                />
              </div>
              
              {/* Main Image */}
              <div className="relative z-10 p-8 lg:p-12">
                <img 
                  src="/src/assets/features/person-working-html-computer.webp" 
                  alt="Person working on computer" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              {activeContent.heading}
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              {activeContent.description}
            </p>

            {/* Highlights */}
            <div className="space-y-3">
              {activeContent.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#000069] rounded-full"></div>
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-sm lg:text-base flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 shadow-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              ENQUIRE NOW
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
        </div>
      
      </div>
    </section>
  )
}

export default Features 