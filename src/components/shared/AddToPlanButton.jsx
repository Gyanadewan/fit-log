
"use client";

import { FitlogContext } from "@/app/context/FitLogContext";
import { useContext } from "react";
import { FiPlus } from "react-icons/fi"
import { toast } from "react-toastify";

function AddToPlanButton({workout}) {
 const {plan,setPlan} = useContext(FitlogContext)
 console.log(plan)
 const handleAddToButton = () => {
    const alreadyAddedPlan = plan.some(item => item.id === workout.id )
    if (alreadyAddedPlan) {
    toast.error(`${workout.name} is already added!`);
  } else {
    setPlan([...plan, workout]);
    toast.success(`${workout.name} added successfully!`);
  }

 }
  return (
    <div>
        <button onClick={handleAddToButton} className=" flex items-center gap-2 rounded-md bg-[#ccff00] px-4 py-2 text-[11px] font-bold text-black">
             <FiPlus></FiPlus> ADD TO TODAY'S PLAN
             </button>
    </div>
  )
}

export default AddToPlanButton
