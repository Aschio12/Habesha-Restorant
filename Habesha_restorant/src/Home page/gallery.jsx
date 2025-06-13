"use client"

export default function GalleryPage() {
  // Sample data for gallery items - you can replace with actual image URLs
  const galleryItems = [
    { id: 1, src: "/placeholder.svg?height=300&width=400", alt: "Ethiopian Dish 1" },
    { id: 2, src: "/placeholder.svg?height=300&width=400", alt: "Ethiopian Dish 2" },
    { id: 3, src: "/placeholder.svg?height=300&width=400", alt: "Ethiopian Dish 3" },
    { id: 4, src: "/placeholder.svg?height=300&width=400", alt: "Ethiopian Dish 4" },
    { id: 5, src: "/placeholder.svg?height=300&width=400", alt: "Ethiopian Dish 5" },
    { id: 6, src: "/placeholder.svg?height=300&width=400", alt: "Ethiopian Dish 6" },
    { id: 7, src: "/placeholder.svg?height=300&width=400", alt: "Ethiopian Dish 7" },
    { id: 8, src: "/placeholder.svg?height=300&width=400", alt: "Ethiopian Dish 8" },
  ]

  // Duplicate the items for seamless infinite scroll
  const duplicatedItems = [...galleryItems, ...galleryItems]

  return (
    <div className="min-h-screen bg-amber-800 p-8">
      {/* Header Section */}
      <div className="text-center py-14 px-3">
        <h1 className="text-4xl md:text-5xl font-light text-amber-100  leading-tight max-w-2xl mx-auto">
          Experience Authentic Ethiopian Cuisine at Habesha
        </h1>
      </div>

      {/* Infinite Scrolling Gallery */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll">
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 lg:w-[40%] lg:h-[65vh] mx-4 bg-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-1000"
            >
              <img
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for infinite scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
