import logo from "../assets/logo.png";
export default function Header(){
    return(
        <div className="w-full h-26 flex flex-wrap gap-5 border border-black boder-[3px] items-center" >
            <div className="w-[42%] h-fit border border-black boder-[3px] flex gap-4 items-center" >
                <img src={logo} alt="logo of habesha restorant" className="w-[15%] h-[60%] rounded-full " />
                <h2 className="italic font-semibold text-3xl inline-block w-[60%] font-serif"><b>Habesha Resstorant</b></h2>
            </div>
            <nav>
                <ul className="flex flex-wrap gap-10 p-1 text-2xl">
                    <li><b>Home</b></li>
                    <li><b>Food/Drinks</b></li>
                    <li><b>Bed Booking</b></li>
                    <li><b><b>My Orders</b></b></li>
                </ul>
            </nav>
        </div>
    );
}