import logo from "../assets/logo.png"

export default function Header() {
  return (
    <div className="w-full h-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
      {/* Logo and Title Section */}
      <div className="flex items-center gap-3 sm:gap-4">
        <img
          src={logo || "/placeholder.svg"}
          alt="logo of habesha restaurant"
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover backdrop-blur-sm"
        />
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-100 whitespace-nowrap">
          Habesha Restaurant
        </h2>
      </div>

      {/* Navigation Section */}
      <nav className="w-full sm:w-auto">
        <ul className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 lg:gap-8 text-sm sm:text-base lg:text-lg text-amber-100">
          <li className="hover:text-amber-200 transition-colors cursor-pointer">
            <b>Home</b>
          </li>
          <li className="hover:text-amber-200 transition-colors cursor-pointer">
            <b>Food/Drinks</b>
          </li>
          <li className="hover:text-amber-200 transition-colors cursor-pointer">
            <b>Bed Booking</b>
          </li>
          <li className="hover:text-amber-200 transition-colors cursor-pointer">
            <b>My Orders</b>
          </li>
        </ul>
      </nav>
    </div>
  )
}
