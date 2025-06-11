import Header from "../reusables/header"
import heroBg from "../assets/ChatGPT Image Apr 13, 2025, 11_53_49 PM.png"

export default function Hero() {
  return (
    <div className="relative text-amber-100">
      {/* First Hero Section with Background */}
      <div
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 8vw), 0 100%)",
          backgroundImage: `url(${heroBg})`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content Container */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <Header />

          {/* Hero Content */}
          <div className="flex flex-col items-center justify-center min-h-[80vh] pt-20 pb-20 sm:pb-32">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
                Experience Authentic Ethiopian Cuisine at Habesha
              </h1>
              <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
                Welcome to Habesha Restaurant, where every dish tells a story and every flavor invites you to experience
                a piece of culture. Our menu is a celebration of rich, traditional recipes passed down through
                generations, alongside modern twists that bring a fresh perspective. Whether you're here for an intimate
                dinner or a festive gathering, we promise a unique dining experience that captures the heart of our
                heritage. Dive into our world of vibrant tastes, aromas, and unforgettable moments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section with Reverse Diagonal - No Gap */}
      <div
        className="relative w-full bg-amber-950"
        style={{
          clipPath: "polygon(0 8vw, 100% 0, 100% 100%, 0 100%)",
          marginTop: "calc(-8vw)",
        }}
      >
        <div className="px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 pb-16">
          {/* Second Hero Content */}
          <div className="rounded-lg p-6 sm:p-8 md:p-10 mb-2 w-[70%] ">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-medium text-center  leading-tight">
              Experience Authentic Ethiopian Cuisine at Habesha
            </h2>
          </div>

          {/* Description Section */}
          <div className="rounded-lg p-6 sm:p-8 mb-8 w-[96%] ">
            <p className="text-base sm:text-lg md:text-xl text-center leading-relaxed p-0">
              At Habesha Restaurant, we offer a unique dining experience that celebrates the rich flavors of Ethiopian
              culture. Enjoy our diverse menu featuring traditional dishes and refreshing drinks, all made with the
              finest ingredients. Whether you're here for a meal or a cozy stay, we ensure a memorable experience.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="bg-amber-200 rounded-lg p-6 sm:p-8 text-amber-900">
              <div className="space-y-4">
                <p className="text-sm sm:text-base leading-relaxed">
                  Discover the authentic taste of Ethiopia with our carefully crafted traditional dishes. Each recipe
                  has been passed down through generations, preserving the rich culinary heritage of our culture. From
                  injera to doro wat, every bite tells a story of tradition and passion.
                </p>
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-semibold">Delicious Food and Refreshing Drinks Await You</h3>
                </div>
              </div>
            </div>

            <div className="bg-amber-200 rounded-lg p-6 sm:p-8 text-amber-900">
              <div className="space-y-4">
                <p className="text-sm sm:text-base leading-relaxed">
                  Experience comfort and hospitality in our welcoming atmosphere. Whether you're joining us for a quick
                  meal or planning to stay longer, our warm environment and attentive service ensure your visit is
                  memorable. Come as a guest, leave as family.
                </p>
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-semibold">Comfortable Lodging for a Relaxing Stay</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
