import SaveButton from "@/components/SaveButton";
import AddToPlanButton from "@/components/shared/AddToPlanButton";
import Image from "next/image";

const getWorkout = async (id) => {
  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );

  const data = await res.json();

  return data;
};

async function WorkoutDetailsPage({ params }) {
  const { id } = await params;

  const workout = await getWorkout(id);

  return (
    <div className="container mx-auto px-4 pt-10 py-10">
      <div className="mx-auto max-w-5xl overflow-hidden text-white">

        <div className="grid md:grid-cols-2 gap-5 px-5">

          <div className="relative h-[300px] md:h-[500px]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          <div>

            <h1 className="text-[26px] font-black uppercase leading-none">
              {workout.name}
            </h1>

            <p className="mt-2 max-w-lg text-[13px] leading-4 text-gray-400">
              {workout.description}
            </p>

            <div className="mt-3 flex gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#ccff00] px-3 py-1 text-[11px] font-bold uppercase text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

      
            <div className="mt-4 overflow-hidden rounded-lg border border-[#222630] bg-[#15181E]">

              <div className="flex items-center justify-between border-b border-[#222630] px-3 py-2.5">
                <span className="text-[14px] font-medium uppercase text-gray-500">
                  Equipment
                </span>

                <span className="text-[14px] text-gray-300">
                  {workout.equipment}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#222630] px-3 py-2.5">
                <span className="text-[12px] font-medium uppercase text-gray-500">
                  Difficulty
                </span>

                <span className="text-[12px] text-gray-300">
                  {workout.difficulty}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#222630] px-3 py-2.5">
                <span className="text-[12px] font-medium uppercase text-gray-500">
                  Sets
                </span>

                <span className="text-[12px] text-gray-300">
                  {workout.sets}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#222630] px-3 py-2.5">
                <span className="text-[12px] font-medium uppercase text-gray-500">
                  Reps
                </span>

                <span className="text-[12px] text-gray-300">
                  {workout.reps}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#222630] px-3 py-2.5">
                <span className="text-[12px] font-medium uppercase text-gray-500">
                  Duration
                </span>

                <span className="text-[12px] text-gray-300">
                  {workout.duration} min
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-[#222630] px-3 py-2.5">
                <span className="text-[12px] font-medium uppercase text-gray-500">
                  Calories
                </span>

                <span className="text-[12px] text-gray-300">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex items-center justify-between px-3 py-2.5">
                <span className="text-[12px] font-medium uppercase text-gray-500">
                  Rating
                </span>

                <span className="text-[12px] text-gray-300">
                  {workout.rating}
                </span>
              </div>

            </div>

            <div className="mt-4">

              <h2 className="text-[16px] font-black uppercase">
                Instructions
              </h2>

              <ol className="mt-2 space-y-1.5">
                {workout.instructions.map((instruction, index) => (
                  <li
                    key={instruction}
                    className="flex gap-2 text-[14px] leading-4 text-gray-400"
                  >
                    <span className="text-gray-500">
                      {index + 1}.
                    </span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>

            </div>

            <div className="mt-5 flex gap-2">

              <AddToPlanButton workout={workout}></AddToPlanButton>

             <SaveButton workout={workout}></SaveButton>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkoutDetailsPage;