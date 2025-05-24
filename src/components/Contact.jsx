import { useForm } from 'react-hook-form'
import { Phone, ArrowLeft, ArrowRight, ArrowRight as ArrowRightIcon } from 'lucide-react'

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm()

  const onSubmit = async (data) => {
    console.log('Form Data:', data)
    await new Promise(resolve => setTimeout(resolve, 1000))
    alert('Thank you for your message! We will get back to you soon.')
    reset()
  }

  return (
    <section id="contact" className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-2">
            <ArrowLeft size={20} className="text-[#000069] sm:hidden" />
            <ArrowLeft size={24} className="text-[#000069] hidden sm:block" />
            <span className="text-xs sm:text-sm font-semibold text-[#000069] tracking-wide uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              CONTACT US
            </span>
            <ArrowRight size={20} className="text-[#000069] sm:hidden" />
            <ArrowRight size={24} className="text-[#000069] hidden sm:block" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* Left Side - Advisory Helpdesk */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                BIA<sup className="text-lg sm:text-xl md:text-2xl">®</sup> Advisory Helpdesk
              </h2>
            </div>

            {/* Contact Card */}
            <div className="bg-[#000069] rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-full"></div>
                <div className="absolute bottom-10 left-10 w-24 h-24 border border-white/20 rounded-full"></div>
                <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    Contact
                  </h3>
                </div>
                
                <div className="mb-6">
                  <div className="text-2xl lg:text-3xl font-bold mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    748 387 1825
                  </div>
                </div>
                
                <p className="text-gray-100 leading-relaxed">
                  We Are Available Monday Through Saturday During Regular Business Hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-10">
            <div className="mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Talk To Our Expert
              </h3>
              <p className="text-gray-600">
                Please share your details and we will reach out to you soon...
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    {...register('name', { 
                      required: 'Name is required',
                      minLength: { value: 2, message: 'Name must be at least 2 characters' }
                    })}
                    className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#000069] focus:border-[#000069] transition-colors"
                    placeholder="Name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    {...register('phone', { 
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[0-9+\-\s()]+$/,
                        message: 'Please enter a valid phone number'
                      }
                    })}
                    className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#000069] focus:border-[#000069] transition-colors"
                    placeholder="Phone"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  type="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Please enter a valid email address'
                    }
                  })}
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#000069] focus:border-[#000069] transition-colors"
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                  <select
                    {...register('city', { required: 'City is required' })}
                    className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#000069] focus:border-[#000069] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Your City</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="delhi">Delhi</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="pune">Pune</option>
                    <option value="chennai">Chennai</option>
                    <option value="hyderabad">Hyderabad</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {errors.city && (
                    <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
                  )}
                </div>

                <div className="relative">
                  <select
                    {...register('country', { required: 'Country is required' })}
                    className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#000069] focus:border-[#000069] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Your Country</option>
                    <option value="india">India</option>
                    <option value="usa">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="canada">Canada</option>
                    <option value="australia">Australia</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {errors.country && (
                    <p className="mt-1 text-sm text-red-600">{errors.country.message}</p>
                  )}
                </div>
              </div>

              <div className="text-xs text-gray-500">
                By submitting this form, you agree to our{' '}
                <a href="#" className="text-[#000069] hover:underline">Terms and Conditions</a>
                {' '}and our{' '}
                <a href="#" className="text-[#000069] hover:underline">Privacy Policy</a>.
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-sm lg:text-base flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 shadow-lg disabled:opacity-75 disabled:cursor-not-allowed disabled:transform-none"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>SUBMITTING...</span>
                  </>
                ) : (
                  <>
                    <span>ENQUIRE NOW</span>
                    <ArrowRightIcon size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 