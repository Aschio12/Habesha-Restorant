import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const customerReviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    comment:
      "Amazing food and excellent service! The traditional dishes were authentic and delicious. Highly recommend this restaurant.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    comment:
      "Great atmosphere and friendly staff. The injera was perfectly made and the meat dishes were flavorful. Will definitely come back!",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Emily Davis",
    comment:
      "Wonderful experience! The vegetarian options were fantastic and the coffee ceremony was a beautiful touch. Loved everything!",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "David Wilson",
    comment:
      "Authentic Ethiopian cuisine at its finest. The spices were perfect and the portion sizes were generous. Outstanding restaurant!",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    comment:
      "Incredible flavors and warm hospitality. The staff explained each dish beautifully. This place is a hidden gem!",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 6,
    name: "James Rodriguez",
    comment:
      "Best Ethiopian food in town! The combination platters are perfect for sharing. Great value and amazing taste.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 7,
    name: "Anna Martinez",
    comment:
      "Loved the cultural experience along with the delicious food. The honey wine was exceptional. Highly recommended!",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 8,
    name: "Robert Taylor",
    comment:
      "Fresh ingredients and authentic preparation. The berbere spice blend was perfect. Will bring friends next time!",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4 >= customerReviews.length ? 0 : prevIndex + 4))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 4 < 0 ? Math.max(0, customerReviews.length - 4) : prevIndex - 4))
  }

  const currentReviews = customerReviews.slice(currentIndex, currentIndex + 4)

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-teal-50 to-teal-100 relative overflow-hidden">
      {/* Striped background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(255,255,255,0.3) 20px, rgba(255,255,255,0.3) 40px)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          CUSTOMERS
          <br />
          REVIEW
        </h2>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            disabled={currentIndex + 4 >= customerReviews.length}
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10">
            {currentReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-40 h-40 rounded-full bg-gray-400 mb-3 overflow-hidden">
                    <img
                      src={review.avatar || "/placeholder.svg"}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{review.comment}</p>
                  </div>
                  <h3 className="font-semibold text-gray-800 text-lg">{review.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(customerReviews.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 4)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                Math.floor(currentIndex / 4) === index ? "bg-teal-600" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
