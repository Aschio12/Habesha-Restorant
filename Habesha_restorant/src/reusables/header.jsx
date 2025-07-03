import { Link, useLocation } from "react-router-dom"
import logo from "../assets/logo.png"

export default function Header() {
  const location = useLocation()

  // Helper function to check if current path matches the link
  const isActive = (path) => location.pathname === path

  return (
    <div className="w-full h-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
      {/* Logo and Title Section */}
      <div className="flex items-center gap-3 sm:gap-4 mt-2">
        <img
          src={logo || "/placeholder.svg"}
          alt="logo of habesha restaurant"
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover backdrop-blur-sm"
        />
        <Link
          to="/"
          className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-100 whitespace-nowrap hover:text-amber-200 transition-colors"
        >
          Habesha Restaurant
        </Link>
      </div>

      {/* Navigation Section */}
      <nav className="w-full sm:w-auto mt-2">
        <ul className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 lg:gap-8 text-sm sm:text-base lg:text-lg text-amber-100">
          <li>
            <Link
              to="/"
              className={`hover:text-amber-200 transition-colors cursor-pointer font-bold ${
                isActive("/") ? "text-amber-200" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className={`hover:text-amber-200 transition-colors cursor-pointer font-bold ${
                isActive("/menu") ? "text-amber-200" : ""
              }`}
            >
              Food/Drinks
            </Link>
          </li>
          <li>
            <Link
              to="/booking"
              className={`hover:text-amber-200 transition-colors cursor-pointer font-bold ${
                isActive("/booking") ? "text-amber-200" : ""
              }`}
            >
              Bed Booking
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              className={`hover:text-amber-200 transition-colors cursor-pointer font-bold ${
                isActive("/orders") ? "text-amber-200" : ""
              }`}
            >
              My Orders
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
