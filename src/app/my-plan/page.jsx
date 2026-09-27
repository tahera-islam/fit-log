"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const MyPlanPage = () => {
    const [workout, setWorkout] = useState(null);
    const [savedWorkout, setSavedWorkout] = useState(null);
    const [activeTab, setActiveTab] = useState("plan");

    useEffect(() => {
        const todayWorkout = localStorage.getItem("todayPlan");
        const savedWorkout = localStorage.getItem("savedWorkout");

        if (todayWorkout) {
            setWorkout(JSON.parse(todayWorkout));
        }

        if (savedWorkout) {
            setSavedWorkout(JSON.parse(savedWorkout));
        }
    }, []);

    return (
        <main className="bg-black min-h-screen text-white px-6 py-16">

            {/* Page Title */}
            <h1 className="text-4xl font-bold">
                MY PLAN
            </h1>

            <p className="text-gray-400 mt-2">
                Cap of five lifts for today. Finish them, then load more.
            </p>
            <div className="grid grid-cols-3 bg-[#151515] rounded-2xl mt-10 divide-x divide-gray-700">

                <div className="p-5">
                    <p className="text-gray-400 text-sm">
                        EXERCISES
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                        {workout ? 1 : 0}
                    </h2>
                </div>

                <div className="p-5">
                    <p className="text-gray-400 text-sm">
                        MINUTES
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                        {workout ? workout.duration : 0}
                    </h2>
                </div>

                <div className="p-5">
                    <p className="text-gray-400 text-sm">
                        CALORIES
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                        {workout ? workout.caloriesBurned : 0}
                    </h2>
                </div>

            </div>

            <div className="flex gap-8 mt-12 border-b border-gray-800">

                <button
                    onClick={() => setActiveTab("plan")}
                    className={`pb-4 font-bold ${activeTab === "plan"
                            ? "text-lime-400 border-b-2 border-lime-400"
                            : "text-gray-500"
                        }`}
                >
                    Today's Plan
                </button>

                <button
                    onClick={() => setActiveTab("saved")}
                    className={`pb-4 font-bold ${activeTab === "saved"
                            ? "text-lime-400 border-b-2 border-lime-400"
                            : "text-gray-500"
                        }`}
                >
                    Saved
                </button>

            </div>
            {activeTab === "plan" && workout && (
                <div className="mt-8 bg-[#151515] rounded-2xl p-5">

                    <div className="flex items-center gap-4">

                        {/* Image */}
                        <img
                            src={workout.image}
                            alt={workout.name}
                            className="w-24 h-24 rounded-xl object-cover"
                        />

                        {/* Workout Details */}
                        <div className="flex-1">

                            <h2 className="text-xl font-bold">
                                {workout.name}
                            </h2>

                            <p className="text-gray-400 mt-1">
                                {workout.equipment}
                            </p>

                            <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-400">
                                <span>⏱ {workout.duration} min</span>
                                <span>🔥 {workout.caloriesBurned} kcal</span>
                                <span>⭐ {workout.rating}</span>
                            </div>

                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-3">

                            <Link
                                href={`/workout/${workout.id}`}
                                className="bg-lime-400 text-black font-semibold px-4 py-2 rounded-full"
                            >
                                View Details
                            </Link>

                            <button
                                onClick={() => {
                                    localStorage.removeItem("todayPlan");
                                    setWorkout(null);
                                }}
                                className="bg-gray-700 text-white px-4 py-2 rounded-full"
                            >
                                ✓ Mark as Done
                            </button>

                            <button
                                onClick={() => {
                                    localStorage.removeItem("todayPlan");
                                    setWorkout(null);
                                }}
                                className="border border-red-500 text-red-500 w-10 h-10 rounded-full"
                            >
                                ✕
                            </button>

                        </div>

                    </div>

                </div>
            )}

            {/* Saved Workout */}
            {activeTab === "saved" && savedWorkout && (
                <div className="mt-8 bg-[#151515] p-6 rounded-2xl">
                    <h2 className="text-2xl font-bold">{savedWorkout.name}</h2>

                    <p className="text-gray-400 mt-2">
                        {savedWorkout.equipment}
                    </p>
                </div>
            )}  

        </main>
    );
};

export default MyPlanPage;