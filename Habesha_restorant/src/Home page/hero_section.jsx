import Header from "../reusables/header";
import heroBg from "../assets/ChatGPT Image Apr 13, 2025, 11_53_49 PM.png";
export default function Hero() {
  return (
    <div
      className="w-full h-screen p-2 text-amber-100 border-b-[10px] bg-contain "
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 100%)",
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <Header />
      <h2 className="text-5xl  font-medium text-center p-0  w-[50%] mt-[7%] h-auto ">
        Experience Authentic Ethiopian Cuisine at Habesha
      </h2>
      <p className="w-[70%] h-auto text-center float-left mt-2 ml-3.5 ">
        Welcome to Habesha Restaurant, where every dish tells a story and every
        flavor invites you to experience a piece of culture. Our menu is a
        celebration of rich, traditional recipes passed down through
        generations, alongside modern twists that bring a fresh perspective.
        Whether you're here for an intimate dinner or a festive gathering, we
        promise a unique dining experience that captures the heart of our
        heritage. Dive into our world of vibrant tastes, aromas, and
        unforgettable moments.
      </p>
    </div>
  );
}
