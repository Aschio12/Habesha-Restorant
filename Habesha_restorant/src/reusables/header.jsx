import logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className=" w-full h-auto flex flex-wrap gap-[12%]  items-center ">
      <div className="w-[42%] h-fit  flex gap-4 items-center">
        <img src={logo} alt="logo of habesha restorant" className=" backdrop-blur-[2px] w-[15%] h-[60%] rounded-full" />
        <h2 className="italic font-fraktur text-3xl inline-block w-[60%] text-amber-100 ">
          <b>Habesha Resstorant</b>
        </h2>
      </div>
      <nav>
        <ul className="flex flex-wrap gap-10 p-1 text-xl text-amber-100">
          <li className="backdrop-blur-[0.5px]"><b>Home</b></li>
          <li className="backdrop-blur-[0.5px]"><b>Food/Drinks</b></li>
          <li className="backdrop-blur-[0.5px]"><b>Bed Booking</b></li>
          <li className="backdrop-blur-[0.5px]"><b>My Orders</b></li>
        </ul>
      </nav>
    </div>
  );
}
