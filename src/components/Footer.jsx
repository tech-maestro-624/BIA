import { Mail, Phone, MapPin, Facebook, Twitter, Youtube, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#000069] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Left Side - Company Info */}
          <div className="space-y-8">
            {/* Logo */}
            <img src="/src/assets/logo.png" className="w-[120px] h-auto" alt="BIA Logo" />

            {/* Description */}
            <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
              Boston Institute of Analytics is a globally recognized training institute offering industry-relevant courses in Data Science and AI. With expert faculty, dual certifications, and strong placement support, BIA empowers learners to build successful careers.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 border border-gray-400 rounded flex items-center justify-center hover:bg-white hover:text-[#000069] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-400 rounded flex items-center justify-center hover:bg-white hover:text-[#000069] transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-400 rounded flex items-center justify-center hover:bg-white hover:text-[#000069] transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-400 rounded flex items-center justify-center hover:bg-white hover:text-[#000069] transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Middle - Quick Links */}
          <div>
            <div className="border-b border-gray-400 pb-2 mb-6">
              <h3 className="text-lg lg:text-xl font-semibold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Quick Links
              </h3>
            </div>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">▷</span>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">▷</span>
                  About
                </a>
              </li>
              <li>
                <a href="#key-highlights" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">▷</span>
                  Key Highlights
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">▷</span>
                  FAQ'S
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">▷</span>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Right Side - Contact Us */}
          <div>
            <div className="border-b border-gray-400 pb-2 mb-6">
              <h3 className="text-lg lg:text-xl font-semibold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Contact Us
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:connect@bostoninstituteofanalytics.org" className="text-gray-300 hover:text-white transition-colors">
                    connect@bostoninstituteofanalytics.org
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-gray-400 flex-shrink-0" />
                <div>
                  <a href="tel:7483871825" className="text-gray-300 hover:text-white transition-colors">
                    7483871825
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-gray-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm leading-relaxed">
                  Mantri Commercio Tower-A, Marathahalli<br />
                  - Sarjapur Outer Ring Rd, Kalyammana<br />
                  Agrahara, Bellandur, Bengaluru, Karnataka<br />
                  560103, India
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Boston Institute of Analytics
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Condition</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 