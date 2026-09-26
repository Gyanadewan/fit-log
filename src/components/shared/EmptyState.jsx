import Link from "next/link";

function EmptyState() {
  return (
    <div className="text-center py-8">
      <h2 className="text-2xl font-bold">
       NOTHING HERE YET
      </h2>

      <p className="text-gray-400 mt-2">
       Browse the library and add a lift to get today moving.
      </p>

      <Link href="/workouts">
      <button className=" mt-4 px-6 py-2  text-gray-800 font-bold bg-[#CCFF00] rounded-2xl">
       Go to workouts
      </button>
      </Link>
    </div>
  );
}

export default EmptyState;
