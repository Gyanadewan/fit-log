import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/assets/banner.png";

function HeroSection() {
  return (
    <section className="container mx-auto py-10 mt-16">
      <div className="w-full rounded-3xl border border-[#222630] bg-gray-800">
        <div className="grid items-center gap-5 md:grid-cols-2 py-5">

          <div className="p-6 md:p-10">
            <p className="mb-4 text-[16px] font-bold tracking-[0.3em] text-[#ccff00]">
              WORKOUT LIBRARY
            </p>

            <h2 className="mb-6  font-black leading-tight text-[30px]">
              TRAIN WITH INTENT.LOG 
               <br />EVERY SET.
            </h2>

            <p className="mb-6 max-w-xl text-base leading-7 text-gray-400 md:text-lg">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today's plan, and watch the week's work add up.
            </p>

            <Link
              href="#library"
              className="inline-block rounded-xl bg-[#ccff00] px-6 py-3 font-bold text-black transition hover:scale-105"
            >
              BROWSE WORKOUTS
            </Link>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <Image
              src={HeroImage}
              alt="Workout"
              width={400}
              height={300}
              className="h-auto w-full max-w-[400px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;