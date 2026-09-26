import Image from "next/image"
import Footerlogo from "@/assets/logo.png"
const Footer = () => {
  return (
    <footer className="bg-[#090A0D] border-t border-gray-600">
        <div className="container mx-auto ">
            <div className="flex flex-col md:flex-row justify-between p-10">
               <div className="flex items-center gap-2 md:py-0 py-4">
                <Image
                  src={Footerlogo}
                  alt="Nothing here"
                  width={20}
                  height={10}
                   />
                <span className="text-xl font-semibold">FITLOG</span>
               </div>
              <div>
                  <p className="text-gray-500">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
              </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
