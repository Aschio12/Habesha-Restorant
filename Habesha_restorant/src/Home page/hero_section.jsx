import Header from "../reusables/header";
import heroBg from "../assets/ChatGPT Image Apr 13, 2025, 11_53_49 PM.png";
export default function Hero() {
  return (
    <div className=" text-amber-100">
      <div
        className="w-full h-[110vh] p-2 border-2 bg-contain bg-amber-100"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 72%, 0 100%)",
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <Header />
        <h2 className="text-5xl  font-medium text-center p-0  w-[50%] mt-[7%] h-auto ">
          Experience Authentic Ethiopian Cuisine at Habesha
        </h2>
        <p className="w-[70%] h-auto text-center float-left mt-2 ml-3.5">
          Welcome to Habesha Restaurant, where every dish tells a story and
          every flavor invites you to experience a piece of culture. Our menu is
          a celebration of rich, traditional recipes passed down through
          generations, alongside modern twists that bring a fresh perspective.
          Whether you're here for an intimate dinner or a festive gathering, we
          promise a unique dining experience that captures the heart of our
          heritage. Dive into our world of vibrant tastes, aromas, and
          unforgettable moments.
        </p>
      </div>
      <div
        className="flex-col flex-wrap w-full h-auto bg-amber-950 border-1 bg-cover mt-[-32vh]"
        style={{ clipPath: "polygon(0 30%, 100% 0, 100% 100%, 0 100%)" }}
      >
        <div className="w-[100%] h-fit bg-cover bg-amber-300 p-10 mt-[15%]">
          <h2 className="w-[70%] border-0 h-auto text-center p-0 text-5xl  font-medium ">
            Experience Authentic Ethiopian Cuisine at Habesha
          </h2>
        </div>
        <div className="w-full h-fit bg-amber-400 mt-12">
          <p className="w-[70%] h-fit text-center mt-2 ml-3.5">
            At Habesha Restaurant, we offer a unique dining experience that
            celebrates the rich flavors of Ethiopian culture. Enjoy our diverse
            menu featuring traditional dishes and refreshing drinks, all made
            with the finest ingredients. Whether you're here for a meal or a
            cozy stay, we ensure a memorable experience.
          </p>
        </div>
      </div>
    </div>
  );
}
