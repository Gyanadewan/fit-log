"use client";

import { useContext, useState } from "react";
import { FitlogContext } from "../context/FitLogContext";
import SelectedCard from "@/components/shared/SelectedCard";
import EmptyState from "@/components/shared/EmptyState";
import { toast } from "react-toastify";

function MyPlanPage() {
  const { plan, setPlan, saved, setSaved } = useContext(FitlogContext);
  const [activeTab, setActiveTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration");

  const handleCloseBtn = (id) => {
    const wokoutPlan = plan.find((item) => item.id === id);
    const workoutSaved = saved.find((item) => item.id === id);

    if (activeTab === "plan") {
      const remainingWorkoutPlan = plan.filter(
        (workout) => workout.id !== id
      );

      setPlan(remainingWorkoutPlan);
      toast.success(`${wokoutPlan.name} deleted successfully`);
    } else {
      const remainingWorkoutSaved = saved.filter(
        (workout) => workout.id !== id
      );

      setSaved(remainingWorkoutSaved);
      toast.success(`${workoutSaved.name} deleted successfully`);
    }
  };

  const currentWorkouts = activeTab === "plan" ? plan : saved;

  const sortedWorkouts = [...currentWorkouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "rating") {
      return a.rating - b.rating;
    }

    return 0;
  });

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

      <p className="text-gray-300">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="bg-gray-500 border border-gray-400 rounded-3xl my-5">
        <div className="flex justify-around p-8">
          <div className="text-center">
            <h3>Exercise</h3>
            <span className="text-3xl text-[#CCFF00]">
              {currentWorkouts.length}
            </span>
          </div>

          <div className="text-center">
            <h3>Minute</h3>
            <span className="text-3xl">{totalMinutes}</span>
          </div>

          <div className="text-center">
            <h3>Calories</h3>
            <span className="text-3xl">{totalCalories}</span>
          </div>
        </div>
      </div>

      <div className="border border-dashed border-gray-500 rounded-2xl my-8 relative">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="select select-sm absolute right-4 top-1 z-10"
        >
          <option value="duration">Sort By: Duration</option>
          <option value="calories">Calories</option>
          <option value="rating">Rating</option>
        </select>

        <div className="tabs tabs-border">
          <input
            onChange={() => setActiveTab("plan")}
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label="Today’s Plan"
            checked={activeTab === "plan"}
          />

          <div className="tab-content border-base-300 bg-base-100 p-10">
            {sortedWorkouts.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="grid gap-2">
                {sortedWorkouts.map((workout) => (
                  <SelectedCard
                    key={workout.id}
                    handleCloseBtn={handleCloseBtn}
                    workout={workout}
                  />
                ))}
              </div>
            )}
          </div>

          <input
            onChange={() => setActiveTab("saved")}
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label="Saved"
            checked={activeTab === "saved"}
          />

          <div className="tab-content border-base-300 bg-base-100 p-10">
            {sortedWorkouts.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="grid gap-2">
                {sortedWorkouts.map((workout) => (
                  <SelectedCard
                    key={workout.id}
                    handleCloseBtn={handleCloseBtn}
                    workout={workout}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPlanPage;