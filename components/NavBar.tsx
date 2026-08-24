'use client'

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              HotelliBI
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition">
              Features
            </a>
            <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition">
              Contact
            </a>
            <a href="#demo" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition">
              Demo
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
