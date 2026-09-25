

function MyPlanPage() {
  return (
    <div className="container mx-auto my-5">
      <h2 className="text-3xl font-bold">MY PLAN</h2>
      <p className="text-gray-300">Cap of five lifts for today. Finish them, then load more.</p>
      <div className="bg-gray-500 border border-gray-400 rounded-3xl my-5">
         <div className="flex justify-around p-8">
               <div className="text-center">
                <h3 className="text-center">Exercise</h3>
                  <span className="text-3xl text-[#CCFF00]">0</span>
               </div>
              <div className="text-center">
                 <h3>Minute</h3>
                  <span className="text-3xl">0</span>
              </div>
              <div className="text-center">
                  <h3>Calories</h3>
                  <span className="text-3xl">0</span>
              </div>
         </div>
      </div>

          
        <div className="border  border-dashed border-gray-500 rounded-2xl my-8">
            <div className="tabs tabs-border">
        <input type="radio" name="my_tabs_2" className="tab" aria-label="Today’s Plan" />
       <div className="tab-content border-base-300 bg-base-100 p-10">
        Todays plan
       </div>

         <input type="radio" name="my_tabs_2" className="tab" aria-label="Saved" defaultChecked />
          <div className="tab-content border-base-300 bg-base-100 p-10">
            Saved
            </div>

      </div>
        </div>

        </div>
        )
      }

export default  MyPlanPage
