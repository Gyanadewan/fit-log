import Image from "next/image";
import Link from "next/link";
import { CiClock2 } from "react-icons/ci";
import { FiStar, FiZap } from "react-icons/fi";



function WorkoutCard({ workout }) {

  return (
      <Link href={`/workouts/${workout.id}`}>
        <div className="overflow-hidden rounded-2xl border border-[#222630] bg-[#15171D] text-white">

      <div className="relative h-48 w-full">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover p-4"
        />
      </div>

      <div className="p-5">

        <div className="mb-2 flex gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-bold uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        <h2 className="text-xl font-black uppercase">
          {workout.name}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {workout.equipment}
        </p>

  
        <div className="my-4 border-t border-white/10"></div>

        <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex   items-center gap-1">
              <CiClock2 />
              <span>
             {workout.duration} min
          </span>

            </div>
          <div className="flex items-center gap-1">
               <FiZap />
          <span>
             {workout.caloriesBurned} kcal
          </span>
          </div>
           
           <div className="flex items-center gap-1">
             <FiStar/>
          <span>
             {workout.rating}
          </span>

           </div>
        </div>
      </div>
    </div>
      
      </Link>
  );
}

export default WorkoutCard;
