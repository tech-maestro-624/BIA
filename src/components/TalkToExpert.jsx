import { useState } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'

const TalkToExpert = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    city: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section className="bg-gray-50 py-16 lg:py-16 w-full flex justify-center ">
      <div className="w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto">
          {/* Header */}
      

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-sm p-4 lg:p-8">
          <div className="text-left mb-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-rajdhani">
              Talk To Our Expert
            </h2>
            <p className="text-gray-600 text-lg">
              Please share your details and we will reach out to you soon..
            </p>
          </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {/* Name */}
                <div className="lg:col-span-1">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-100 border border-[#D4DCFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-bia-blue focus:border-transparent placeholder-gray-500 text-gray-900"
                    required
                  />
                </div>

                {/* Email */}
                <div className="lg:col-span-1">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-bia-blue focus:border-transparent placeholder-gray-500 text-gray-900"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="lg:col-span-1">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-bia-blue focus:border-transparent placeholder-gray-500 text-gray-900"
                    required
                  />
                </div>

                {/* Country */}
                <div className="lg:col-span-1 relative">
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-bia-blue focus:border-transparent text-gray-500 appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Your Country</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="ca">Canada</option>
                    <option value="au">Australia</option>
                    <option value="in">India</option>
                    <option value="de">Germany</option>
                    <option value="fr">France</option>
                    <option value="sg">Singapore</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>

                {/* City */}
                <div className="lg:col-span-1 relative">
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-bia-blue focus:border-transparent text-gray-500 appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Your City</option>
                    <option value="boston">Boston</option>
                    <option value="newyork">New York</option>
                    <option value="london">London</option>
                    <option value="toronto">Toronto</option>
                    <option value="sydney">Sydney</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="berlin">Berlin</option>
                    <option value="paris">Paris</option>
                    <option value="singapore">Singapore</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>

              {/* Submit Button Row */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4">
                {/* Terms Text */}
                <p className="text-sm text-gray-500 max-w-md">
                  By submitting the form, you agree to our{' '}
                  <a href="#" className="text-bia-blue hover:underline">Terms and Conditions</a>
                  {' '}and our{' '}
                  <a href="#" className="text-bia-blue hover:underline">Privacy Policy</a>.
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl font-rajdhani whitespace-nowrap"
                >
                  ENQUIRE NOW
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TalkToExpert 