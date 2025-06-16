import { Facebook, Twitter, Instagram, Music } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left Section - Logo and Contact */}
          <div className="space-y-4">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">logo Habesha Restaurant</h3>
            </div>

            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium">Address:</span> Addis Ababa Golagole building
              </p>
              <p>
                <span className="font-medium">Phone:</span> 1800 123 4567
              </p>
              <p>
                <span className="font-medium">Email:</span> example@email.com
              </p>
            </div>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="space-y-3">
            <a href="/about" className="block text-sm hover:text-teal-300 transition-colors">
              About us
            </a>
            <a href="/contact" className="block text-sm hover:text-teal-300 transition-colors">
              Contact us
            </a>
            <a href="/menu" className="block text-sm hover:text-teal-300 transition-colors">
              Food/Drinks
            </a>
            <a href="/booking" className="block text-sm hover:text-teal-300 transition-colors">
              Bed Booking
            </a>
            <a href="/orders" className="block text-sm hover:text-teal-300 transition-colors">
              My orders
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-6">
          <a
            href="https://facebook.com"
            className="w-10 h-10 bg-gray-600 hover:bg-blue-600 rounded flex items-center justify-center transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook size={20} className="text-white" />
          </a>
          <a
            href="https://twitter.com"
            className="w-10 h-10 bg-gray-600 hover:bg-blue-400 rounded flex items-center justify-center transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter size={20} className="text-white" />
          </a>
          <a
            href="https://instagram.com"
            className="w-10 h-10 bg-gray-600 hover:bg-pink-600 rounded flex items-center justify-center transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={20} className="text-white" />
          </a>
          <a
            href="https://tiktok.com"
            className="w-10 h-10 bg-gray-600 hover:bg-black rounded flex items-center justify-center transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <Music size={20} className="text-white" />
          </a>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2025 Habesha Restaurant. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
