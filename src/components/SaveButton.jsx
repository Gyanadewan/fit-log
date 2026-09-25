"use client"
import { FitlogContext } from "@/app/context/FitLogContext"
import { useContext } from "react"
import { FiBookmark } from "react-icons/fi"
import { toast } from "react-toastify"


function SaveButton({workout}) {
    const {saved,setSaved,} = useContext(FitlogContext)
    const handleSaveButton =()=> {
        const alreadySaved = saved.some(item => item.id === workout.id)
        if(alreadySaved){
            toast.error(`${workout.name} is already Saved`)
        }
       else{
        setSaved ([...saved,workout])
        toast.success(`${workout.name}  Saved successfully`)
       }
    }
  return (
    <div>
       <button onClick={handleSaveButton} className=" flex items-center gap-2 rounded-md border border-[#333740] px-4 py-2 text-[11px] font-medium text-gray-300">
                <FiBookmark className="text-sm" /> SAVE FOR LATER
              </button>
    </div>
  )
}

export default SaveButton
