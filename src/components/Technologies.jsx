import { useEffect, useRef } from 'react'

const Technologies = () => {
  const slider1Ref = useRef(null)
  const slider2Ref = useRef(null)

  // Programming Tools & Technologies
  const programmingTools = [
    { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
    { name: 'NumPy', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg' },
    { name: 'Pandas', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Pandas_mark.svg' },
    { name: 'Matplotlib', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg' },
    { name: 'Scikit-learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
    { name: 'TensorFlow', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg' },
    { name: 'PyTorch', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg' },
    { name: 'Jupyter', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg' },
    { name: 'R', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg' },
    { name: 'SQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png' },
    { name: 'Apache Spark', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg' },
    { name: 'Git', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg' },
    { name: 'Docker', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg' },
    { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Google-cloud-platform.svg' }
  ]

  // AI Tools & Technologies
  const aiTools = [
    { name: 'Hugging Face', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Hugging_Face_logo.svg' },
    { name: 'OpenAI', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
    { name: 'Google Gemini', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg' },
    { name: 'FLAN-T5', logo: 'https://via.placeholder.com/120x60/1a365d/ffffff?text=FLAN-T5' },
    { name: 'LangChain', logo: 'https://via.placeholder.com/120x60/000000/ffffff?text=LangChain' },
    { name: 'Transformers', logo: 'https://via.placeholder.com/120x60/ff6b35/ffffff?text=Transformers' },
    { name: 'BERT', logo: 'https://via.placeholder.com/120x60/4285f4/ffffff?text=BERT' },
    { name: 'GPT', logo: 'https://via.placeholder.com/120x60/00d9ff/ffffff?text=GPT' },
    { name: 'Stable Diffusion', logo: 'https://via.placeholder.com/120x60/7c3aed/ffffff?text=SD' },
    { name: 'Claude', logo: 'https://via.placeholder.com/120x60/f59e0b/ffffff?text=Claude' },
    { name: 'DALL-E', logo: 'https://via.placeholder.com/120x60/059669/ffffff?text=DALL-E' },
    { name: 'Midjourney', logo: 'https://via.placeholder.com/120x60/ec4899/ffffff?text=MJ' }
  ]

  useEffect(() => {
    const slider1 = slider1Ref.current
    const slider2 = slider2Ref.current

    if (!slider1 || !slider2) return

    // Clone items for seamless loop
    const cloneItems = (slider) => {
      const items = Array.from(slider.children)
      items.forEach(item => {
        const clone = item.cloneNode(true)
        slider.appendChild(clone)
      })
    }

    cloneItems(slider1)
    cloneItems(slider2)

    // Animation setup
    let scrollAmount1 = 0
    let scrollAmount2 = 0

    const animate = () => {
      // Scroll speeds (different for variety)
      scrollAmount1 -= 0.5
      scrollAmount2 -= 0.3

      // Reset when half scrolled (seamless loop)
      if (Math.abs(scrollAmount1) >= slider1.scrollWidth / 2) {
        scrollAmount1 = 0
      }
      if (Math.abs(scrollAmount2) >= slider2.scrollWidth / 2) {
        scrollAmount2 = 0
      }

      slider1.style.transform = `translateX(${scrollAmount1}px)`
      slider2.style.transform = `translateX(${scrollAmount2}px)`

      requestAnimationFrame(animate)
    }

    animate()

    // Pause on hover
    const handleMouseEnter = (slider) => {
      slider.style.animationPlayState = 'paused'
    }

    const handleMouseLeave = (slider) => {
      slider.style.animationPlayState = 'running'
    }

    slider1.addEventListener('mouseenter', () => handleMouseEnter(slider1))
    slider1.addEventListener('mouseleave', () => handleMouseLeave(slider1))
    slider2.addEventListener('mouseenter', () => handleMouseEnter(slider2))
    slider2.addEventListener('mouseleave', () => handleMouseLeave(slider2))

    return () => {
      slider1?.removeEventListener('mouseenter', () => handleMouseEnter(slider1))
      slider1?.removeEventListener('mouseleave', () => handleMouseLeave(slider1))
      slider2?.removeEventListener('mouseenter', () => handleMouseEnter(slider2))
      slider2?.removeEventListener('mouseleave', () => handleMouseLeave(slider2))
    }
  }, [])

  return (
    <section className="bg-gray-50 py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Programming Tools Section */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            20+ Programming Tools, Libraries & Technologies Covered
          </h2>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                ref={slider1Ref}
                className="flex gap-8 lg:gap-12 items-center"
                style={{ width: 'max-content' }}
              >
                {programmingTools.map((tool, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-center w-24 h-16 lg:w-32 lg:h-20">
                      <img 
                        src={tool.logo} 
                        alt={tool.name}
                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/120x60/000069/ffffff?text=${tool.name}`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI Tools Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            10+ Generative AI Tools, Libraries & Technologies Covered
          </h2>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                ref={slider2Ref}
                className="flex gap-8 lg:gap-12 items-center"
                style={{ width: 'max-content' }}
              >
                {aiTools.map((tool, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-center w-24 h-16 lg:w-32 lg:h-20">
                      <img 
                        src={tool.logo} 
                        alt={tool.name}
                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/120x60/000069/ffffff?text=${tool.name}`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Technologies 