"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import { FitlogContext } from "@/app/context/FitLogContext";
import { useContext, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const { plan, saved } = useContext(FitlogContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b border-white/10 bg-black text-white fixed top-0 w-full overflow-hidden z-90">
      <div className="container mx-auto px-4 ">

        <div className="flex items-center justify-between py-5">

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl md:hidden"
          >
            {isMenuOpen ? <IoClose /> : <CiMenuBurger />}
          </button>

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

            <span>FITLOG</span>
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
              className="rounded-full px-2 py-2 text-sm font-bold sm:px-4"
            >
              Plan{" "}
              <span className="rounded-full bg-[#ccff00] px-1 text-black">
                {plan.length}
              </span>
            </Link>

            <Link
              href="/myplan"
              className="text-sm"
            >
              Saved{" "}
              <span className="rounded-full border border-gray-400 px-1">
                {saved.length}
              </span>
            </Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t border-white/10 py-4 md:hidden">
            <div className="flex flex-col gap-4">

              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="font-medium "
              >
                Workout
              </Link>

              <Link
                href="/myplan"
                onClick={() => setIsMenuOpen(false)}
                className="font-medium text-gray-400 hover:text-white"
              >
                My Plan
              </Link>

            </div>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;

