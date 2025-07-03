"use client"

import { useState } from "react"

// Sample data for all categories
const menuData = {
  "modern-food": [
    { id: 1, name: "Avocado Toast", image: "https://via.placeholder.com/200x200?text=Avocado+Toast", price: 12.99 },
    { id: 2, name: "Quinoa Bowl", image: "https://via.placeholder.com/200x200?text=Quinoa+Bowl", price: 15.99 },
    { id: 3, name: "Sushi Roll", image: "https://via.placeholder.com/200x200?text=Sushi+Roll", price: 18.99 },
    { id: 4, name: "Caesar Salad", image: "https://via.placeholder.com/200x200?text=Caesar+Salad", price: 11.99 },
    { id: 5, name: "Grilled Salmon", image: "https://via.placeholder.com/200x200?text=Grilled+Salmon", price: 24.99 },
    { id: 6, name: "Pasta Carbonara", image: "https://via.placeholder.com/200x200?text=Pasta+Carbonara", price: 16.99 },
  ],
  "cultural-food": [
    { id: 7, name: "Doro Wat", image: "https://via.placeholder.com/200x200?text=Doro+Wat", price: 18.99 },
    { id: 8, name: "Kitfo", image: "https://via.placeholder.com/200x200?text=Kitfo", price: 22.99 },
    { id: 9, name: "Injera Combo", image: "https://via.placeholder.com/200x200?text=Injera+Combo", price: 16.99 },
    { id: 10, name: "Tibs", image: "https://via.placeholder.com/200x200?text=Tibs", price: 19.99 },
    { id: 11, name: "Shiro", image: "https://via.placeholder.com/200x200?text=Shiro", price: 14.99 },
    { id: 12, name: "Vegetarian Combo", image: "https://via.placeholder.com/200x200?text=Veg+Combo", price: 15.99 },
  ],
  "modern-drink": [
    { id: 13, name: "Cold Brew Coffee", image: "https://via.placeholder.com/200x200?text=Cold+Brew", price: 4.99 },
    { id: 14, name: "Green Smoothie", image: "https://via.placeholder.com/200x200?text=Green+Smoothie", price: 6.99 },
    { id: 15, name: "Craft Beer", image: "https://via.placeholder.com/200x200?text=Craft+Beer", price: 5.99 },
    { id: 16, name: "Iced Latte", image: "https://via.placeholder.com/200x200?text=Iced+Latte", price: 4.49 },
    { id: 17, name: "Fresh Juice", image: "https://via.placeholder.com/200x200?text=Fresh+Juice", price: 3.99 },
    { id: 18, name: "Kombucha", image: "https://via.placeholder.com/200x200?text=Kombucha", price: 5.49 },
  ],
  "cultural-drink": [
    {
      id: 19,
      name: "Ethiopian Coffee",
      image: "https://via.placeholder.com/200x200?text=Ethiopian+Coffee",
      price: 5.99,
    },
    { id: 20, name: "Tej (Honey Wine)", image: "https://via.placeholder.com/200x200?text=Tej", price: 8.99 },
    { id: 21, name: "Tella (Traditional Beer)", image: "https://via.placeholder.com/200x200?text=Tella", price: 6.99 },
    { id: 22, name: "Spiced Tea", image: "https://via.placeholder.com/200x200?text=Spiced+Tea", price: 3.99 },
    { id: 23, name: "Ginger Drink", image: "https://via.placeholder.com/200x200?text=Ginger+Drink", price: 4.49 },
    { id: 24, name: "Hibiscus Tea", image: "https://via.placeholder.com/200x200?text=Hibiscus+Tea", price: 3.49 },
  ],
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("modern-food")
  const [cart, setCart] = useState([])

  // Navigation categories
  const categories = [
    { id: "modern-food", name: "Modern Food", icon: "🍽️" },
    { id: "cultural-food", name: "Cultural Food", icon: "🍛" },
    { id: "modern-drink", name: "Modern Drink", icon: "🥤" },
    { id: "cultural-drink", name: "Cultural Drink", icon: "☕" },
  ]

  // Get current category items
  const currentItems = menuData[activeCategory] || []

  // Handle add to cart
  const addToCart = (item) => {
    setCart((prev) => [...prev, item])
    alert(`${item.name} added to cart!`)
  }

  // Handle buy now
  const buyNow = (item) => {
    alert(`Purchasing ${item.name} for $${item.price}!`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Habesha Restaurant Menu</h1>
            <div className="bg-white/20 px-4 py-2 rounded-full">Cart: {cart.length} items</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 py-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? "bg-amber-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-800"
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {categories.find((cat) => cat.id === activeCategory)?.name}
        </h2>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/200x200?text=${encodeURIComponent(item.name)}`
                  }}
                />
                <div className="absolute top-2 right-2 bg-amber-600 text-white px-2 py-1 rounded-full text-sm font-bold">
                  ${item.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2">{item.name}</h3>
                <p className="text-2xl font-bold text-amber-600 mb-4">${item.price}</p>

                {/* Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => addToCart(item)}
                    className="flex-1 bg-amber-100 text-amber-800 border border-amber-300 px-4 py-2 rounded-lg hover:bg-amber-200 transition-colors font-semibold flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h7M17 18a2 2 0 11-4 0 2 2 0 014 0zM9 18a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Add to Cart
                  </button>
                  <button
                    onClick={() => buyNow(item)}
                    className="flex-1 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors font-semibold flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {currentItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No items available in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
