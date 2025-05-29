import { useForm } from 'react-hook-form'
import { X, ArrowRight } from 'lucide-react'

const Modal = ({ isOpen, onClose, title = "Talk To Our Expert" }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm()

  const handleDownloadBrochure = () => {
    // Create a link to download the brochure
    const link = document.createElement('a')
    link.href = '/BIA-Data-Science-Brochure.pdf'
    link.download = 'BIA-Data-Science-AI-Program-Brochure.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const onSubmit = async (data) => {
    try {
      console.log('Submitting form data:', data)
      
      // Submit form data to PHP backend
      const response = await fetch('/api/submit-form.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          source: 'modal', // Track where the form was submitted from
          timestamp: new Date().toISOString()
        })
      })

      const result = await response.json()
      
      if (response.ok && result.success) {
        // Form submitted successfully
        alert('Thank you for your inquiry! We will get back to you soon. Your brochure download will start now.')
        
        // Trigger brochure download after successful submission
        handleDownloadBrochure()
        
        // Reset form and close modal
        reset()
        onClose()
      } else {
        // Handle error
        alert(result.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Network error. Please check your connection and try again.')
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl p-8 lg:p-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 bg-gray-900 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
        >
          <X size={20} className="text-white" />
        </button>

        {/* Header */}
        <div className="mb-8 pr-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            {title}
          </h2>
          <p className="text-gray-600">
            Please share your details and we will reach out to you soon..
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                {...register('name', { 
                  required: 'Name is required',
                  minLength: { value: 2, message: 'Name must be at least 2 characters' }
                })}
                className="w-full px-4 py-4 bg-gray-100 border-0 rounded-xl focus:ring-2 focus:ring-[#000069] transition-colors placeholder-gray-500"
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
                className="w-full px-4 py-4 bg-gray-100 border-0 rounded-xl focus:ring-2 focus:ring-[#000069] transition-colors placeholder-gray-500"
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
              className="w-full px-4 py-4 bg-gray-100 border-0 rounded-xl focus:ring-2 focus:ring-[#000069] transition-colors placeholder-gray-500"
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
                className="w-full px-4 py-4 bg-gray-100 border-0 rounded-xl focus:ring-2 focus:ring-[#000069] transition-colors appearance-none cursor-pointer text-gray-500"
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
                className="w-full px-4 py-4 bg-gray-100 border-0 rounded-xl focus:ring-2 focus:ring-[#000069] transition-colors appearance-none cursor-pointer text-gray-500"
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

          <div className="text-sm text-gray-600">
            By submitting the form, you agree to our{' '}
            <a href="#" className="text-[#000069] hover:underline">Terms and Conditions</a>
            {' '}and our{' '}
            <a href="#" className="text-[#000069] hover:underline">Privacy Policy</a>.
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 shadow-lg disabled:opacity-75 disabled:cursor-not-allowed disabled:transform-none"
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
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Modal 