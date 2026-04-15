"use client";
import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { TfiTimer } from "react-icons/tfi";
import { GoGraph } from "react-icons/go";
import { usePathname } from "next/navigation";


const Navbar = () => {
  const pathName = usePathname();
    
   
    return (

        <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-2xl font-bold"><span>Keen</span> <span className="text-green-900">Keeper</span></a>
  </div>
  <div className="flex-none ">
    <ul className="menu menu-horizontal px-1 gap-3">
         <li className="flex justify-center items-center">
        <Link className={`${pathName === "/" ? "bg-green-800  text-white" : ""}`} href="/"> <span><IoMdHome /></span><span>Home</span></Link>
      </li>
      <li className="flex justify-center items-center">
        <Link className={`${pathName === "/timeline" ? "bg-green-800 text-white" : ""}`} href="/timeline"> <span><TfiTimer /></span><span>Timeline</span></Link>
      </li>
      <li className="flex justify-center items-center">
        <Link className={`${pathName === "/status" ? "bg-green-800 text-white" : ""}`} href="/status"> <span><GoGraph /></span> <span>Status</span></Link>
      </li>


      {/* <li className="flex justify-center items-center">
        <Link className={`${pathName === "/status" ? "bg-green-800 text-white" : ""}`} href="/FriendsData"> FriendsData</Link>
      </li> */}
     
      
    </ul>
  </div>
</div>
    );
};

export default Navbar;