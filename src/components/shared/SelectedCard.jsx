import Image from "next/image";

function  SelectedCard({ workout }) {
  return (
    <div className="w-full rounded-2xl border border-gray-800 bg-[#12161c] p-3 flex items-center gap-4">

      <Image
        src={workout.image}
        alt={workout.name}
        width={400}
        height={300}
        className="w-28 h-16 rounded-lg object-cover"
      />

      <div className="flex-1">
        <h2 className="text-sm font-bold text-white uppercase">
          {workout.name}
        </h2>

        <p className="text-xs text-gray-400 mt-1">
          {workout.category}
        </p>

        <div className="flex items-center gap-4 mt-2 text-xs text-gray-300">
          <span className="flex items-center gap-1">
            🕒 {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            🔥 {workout.calories} kcal
          </span>

          <span className="flex items-center gap-1">
            ⭐ {workout.rating}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">

        <button className="rounded-full border border-gray-700 px-5 py-2 text-xs text-white hover:bg-gray-800">
          View Details
        </button>

        <button className="rounded-full bg-lime-400 px-5 py-2 text-xs font-semibold text-black hover:bg-lime-300">
          ✓ Mark as Done
        </button>

        <button className="text-gray-500 hover:text-white text-lg">
          ×
        </button>

      </div>
    </div>
  );
}

export default SelectedCard;