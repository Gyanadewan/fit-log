import Image from "next/image";



function WorkoutCard({ workout }) {
  console.log("work out data single",workout)
  return (
    <div className="overflow-hidden rounded-2xl border border-[#222630] bg-[#15171D] text-white">

      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover p-4"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Muscle Groups */}
        <div className="mb-4 flex gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-bold uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Workout Name */}
        <h2 className="text-xl font-black uppercase">
          {workout.name}
        </h2>

        {/* Equipment */}
        <p className="mt-1 text-sm text-gray-500">
          {workout.equipment}
        </p>

        {/* Divider */}
        <div className="my-4 border-t border-white/10"></div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-gray-400">

          <span>
            ◷ {workout.duration} min
          </span>

          <span>
            ● {workout.caloriesBurned} kcal
          </span>

          <span>
            ☆ {workout.rating}
          </span>

        </div>
      </div>
    </div>
  );
}

export default WorkoutCard;
