

import { IoIosFitness } from "react-icons/io"
const Footer = () => {
  return (
    <footer className="bg-[#090A0D] border-t border-gray-600">
        <div className="container mx-auto ">
            <div className="flex justify-between p-10">
               <div className="flex items-center gap-1">
                 <IoIosFitness className="text-3xl  text-[#ccff00]" />
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
