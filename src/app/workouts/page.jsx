
import WorkoutCard from "@/components/shared/WorkoutCard";

const getWorkouts = async () => {
 const res = await fetch ("https://api.api-store.workers.dev/api/fitlog")
 const data = await res.json()
 return data;
}
async function WorkoutsPage() {
    const workouts = await getWorkouts()
  return (
    <div className="container mx-auto">
         <h2 className="text-2xl font-bold">THE LIBRARY</h2>
         <p >Twelve lifts covering every major muscle group.</p>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
             {workouts.map((workout) => (
          <div key={workout.id}>
              <WorkoutCard workout={workout} />
              </div>
            ))}
         </div>

    </div>
  )
}

export default WorkoutsPage
