"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import { FitlogContext } from "@/app/context/FitLogContext";
import { useContext } from "react";

function Navbar() {
    const { plan,saved } = useContext(FitlogContext);

return ( 
     <nav className="border-b border-white/10 bg-black text-white">
     <div className=" container mx-auto flex  items-center justify-between   py-5 ">

    <Link
      href="/"
      className="flex items-center gap-2 text-2xl font-black tracking-wider"
    >
      <Image
        src={Logo}
        alt="FitLog Logo"
        width={30}
        height={20}
      />

      <span> FITLOG</span>
    </Link>


    <div className="hidden items-center gap-8 md:flex">
      <Link
        href="/"
        className="font-medium text-[#ccff00]"
      >
        Workout
      </Link>

      <Link
        href="/myplan"
        className="font-medium text-gray-400 hover:text-white"
      >
        My Plan
      </Link>
    </div>

    <div className="flex items-center gap-2">
      <Link
        href="/myplan"
        className="rounded-full bg-[#ccff00] px-4 py-2 text-sm font-bold text-black"
      >
        Plan { plan.length}
      </Link>

      <Link
        href="/myplan"
        className="rounded-full border border-[#ccff00] px-4 py-2 text-sm font-bold text-[#ccff00]"
      >
        Saved {saved.length}
      </Link>
    </div>

  </div>
</nav>


);
}

export default Navbar;
