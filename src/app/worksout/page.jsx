
import WorkoutCard from "@/components/shared/WorkoutCard"
const getWorkouts  = async () => {
    const res = await fetch ("https://api.abcz.workers.dev/api/fitlog")
    const data = await res.json()
    return data
}
 async function WorksOutPage () {
    const worksouts = await getWorkouts()
  return (
    <div className="container mx-auto">
        <h2 className="text-xl font-bold">THE LIBRARY</h2>
        <p>Twelve lifts covering every major muscle group.</p>
        <div className="grid grid-cols-3 gap-5 py-10">
             {
             worksouts.map(workout => <WorkoutCard key={workout.id} workout={workout}></WorkoutCard>)
             }
        </div>
    </div>
  )
}

export default WorksOutPage
