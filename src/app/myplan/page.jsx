
"use client"
import { useContext, useState } from "react";
import { FitlogContext } from "../context/FitLogContext";
import SelectedCard from "@/components/shared/SelectedCard";


function MyPlanPage() {
   const { plan, saved } = useContext(FitlogContext);
   const [activeTab, setActiveTab] = useState("plan");
  const currentWorkouts = activeTab === "plan"?plan:saved
  const totalMinutes = currentWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = currentWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );
  return (
    <div className="container mx-auto my-5">
      <h2 className="text-3xl font-bold">MY PLAN</h2>
      <p className="text-gray-300">Cap of five lifts for today. Finish them, then load more.</p>
      <div className="bg-gray-500 border border-gray-400 rounded-3xl my-5">
         <div className="flex justify-around p-8">
               <div className="text-center">
                <h3 className="text-center">Exercise</h3>
                  <span className="text-3xl text-[#CCFF00]">{currentWorkouts.length}</span>
               </div>
              <div className="text-center">
                 <h3>Minute</h3>
                  <span className="text-3xl">{totalMinutes}</span>
              </div>
              <div className="text-center">
                  <h3>Calories</h3>
                  <span className="text-3xl">{ totalCalories}</span>
              </div>
         </div>
      </div>

          
        <div className="border  border-dashed border-gray-500 rounded-2xl my-8">
            <div className="tabs tabs-border">
        <input onChange={() => setActiveTab("plan")} type="radio" name="my_tabs_2" className="tab" aria-label="Today’s Plan"  checked={activeTab === "plan"} />
       <div className="tab-content border-base-300 bg-base-100 p-10">   
   {currentWorkouts.length === 0 ? (
  <p className="text-center text-2xl font-bold text-gray-400 py-10">
    NOTHING HERE YET
  </p>
) : (
  currentWorkouts.map((workout) => (
    <SelectedCard key={workout.id} workout={workout} />
  ))
   )}
       </div>
         <input onChange={() => setActiveTab("saved")} type="radio" name="my_tabs_2" className="tab" aria-label="Saved"  checked={activeTab === "saved"} />
          <div className="tab-content border-base-300 bg-base-100 p-10">
              
      {currentWorkouts.length === 0 ? (
     <p className="text-center text-2xl font-bold text-gray-400 py-10">
       NOTHING HERE YET
     </p>
    ) : (
  currentWorkouts.map((workout) => (
    <SelectedCard key={workout.id} workout={workout} />
  ))
   )}
   </div>
      </div>
        </div>

        </div>
        )
      }

export default  MyPlanPage
