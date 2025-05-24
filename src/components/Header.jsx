import { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Key Highlights', href: '#features' },
    { name: "FAQ'S", href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-4 left-4 right-4 z-50 flex justify-center">
      <div className="bg-white/95 w-2/3 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/50">
        <div className="px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <img src="/header/logo 1.png" className="w-[120px] h-auto" alt="BIA Logo" />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-bia-blue font-medium transition-colors duration-200 text-sm"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold text-sm flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5 shadow-md">
                ENQUIRE NOW
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-bia-blue"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-bia-blue font-medium rounded-lg hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2 w-full">
                  ENQUIRE NOW
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 