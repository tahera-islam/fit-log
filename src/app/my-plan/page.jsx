"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const MyPlanPage = () => {
    const [workouts, setWorkouts] = useState([]);
    const [savedWorkouts, setSavedWorkouts] = useState([]);
    const [activeTab, setActiveTab] = useState("plan");

    useEffect(() => {
        const todayWorkout = localStorage.getItem("todayPlan");
        const savedWorkout = localStorage.getItem("savedWorkout");

        if (todayWorkout) {
            const todayList = JSON.parse(todayWorkout);

            setWorkouts(todayList);
        }

        if (savedWorkout) {
            const oldData = JSON.parse(savedWorkout);

            const savedList = Array.isArray(oldData)
                ? oldData
                : [oldData];

            const validSavedList = savedList.filter(
                (item) =>
                    item &&
                    typeof item === "object" &&
                    item.image &&
                    item.name
            );

            setSavedWorkouts(validSavedList);

            localStorage.setItem(
                "savedWorkout",
                JSON.stringify(validSavedList)
            );
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
                        {workouts.length}
                    </h2>
                </div>

                <div className="p-5">
                    <p className="text-gray-400 text-sm">
                        MINUTES
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                        {workouts.reduce((total, item) => total + item.duration, 0)}
                    </h2>
                </div>

                <div className="p-5">
                    <p className="text-gray-400 text-sm">
                        CALORIES
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                        {workouts.reduce((total, item) => total + item.caloriesBurned, 0)}
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
           {/* Today's Plan Workouts */}
{activeTab === "plan" && workouts.length > 0 && (
    <div className="mt-8 space-y-4">

        {workouts.map((workout) => (
            <div
                key={workout.id}
                className="bg-[#151515] rounded-2xl p-5"
            >

                <div className="flex items-center gap-4">

                    {/* Image */}
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        width={96}
                        height={96}
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
                            className="bg-lime-400 text-black font-semibold px-4 py-2 rounded-full whitespace-nowrap"
                        >
                            View Details
                        </Link>

                        <button
                            onClick={() => {
                                localStorage.removeItem("todayPlan");
                                setWorkouts([]);
                            }}
                            className="bg-gray-700 text-white px-4 py-2 rounded-full whitespace-nowrap"
                        >
                            ✓ Mark as Done
                        </button>

                        <button
                            onClick={() => {
                                const remainingWorkouts = workouts.filter(
                                    (item) => item.id !== workout.id
                                );

                                setWorkouts(remainingWorkouts);

                                localStorage.setItem(
                                    "todayPlan",
                                    JSON.stringify(remainingWorkouts)
                                );
                            }}
                            className="border border-red-500 text-red-500 w-10 h-10 rounded-full"
                        >
                            ✕
                        </button>

                    </div>

                </div>

            </div>
        ))}

    </div>
)}

            {/* Saved Workouts */}
        {activeTab === "saved" && savedWorkouts.length === 0 && (
            <div className="mt-8 space-y-4">

                 {savedWorkouts.map((workout) => (
                    <div
                        key={workout.id}
                        className="bg-[#151515] rounded-2xl p-5"
                        >

                            <div className="flex items-center gap-4">

                                {/* Image */}
                                {workout.image && (
                                    <Image
                                        src={workout.image}
                                        alt={workout.name || "Saved workout"}
                                        width={96}
                                        height={96}
                                        className="w-24 h-24 rounded-xl object-cover"
                                    />
                                )}

                                {/* Workout Details */}
                                <div className="flex-1">

                                    <h2 className="text-xl font-bold">
                                        {workout.name}
                                    </h2>

                                    <p className="text-gray-400 mt-1">
                                        {workout.equipment}
                                    </p>

                                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-400">
                                        <span>
                                            ⏱ {workout.duration} min
                                        </span>

                                        <span>
                                            🔥 {workout.caloriesBurned} kcal
                                        </span>

                                        <span>
                                            ⭐ {workout.rating}
                                        </span>
                                    </div>

                                </div>

                                {/* Buttons */}
                                <div className="flex items-center gap-3">

                                    <Link
                                        href={`/workout/${workout.id}`}
                                        className="bg-lime-400 text-black font-semibold px-4 py-2 rounded-full whitespace-nowrap"
                                    >
                                        View Details
                                    </Link>

                                    <button
                                        onClick={() => {
                                            const remainingWorkouts =
                                                savedWorkouts.filter(
                                                    (item) => item.id !== workout.id
                                                );

                                            setSavedWorkouts(remainingWorkouts);

                                            localStorage.setItem(
                                                "savedWorkout",
                                                JSON.stringify(remainingWorkouts)
                                            );
                                        }}
                                        className="border border-red-500 text-red-500 w-10 h-10 rounded-full"
                                    >
                                        ✕
                                    </button>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>
            )}
            {/* Empty State */}
            {activeTab === "plan" && workouts.length === 0 && (
                <div className="mt-16 text-center">

                    <h2 className="text-2xl font-bold">
                        NOTHING HERE YET
                    </h2>

                    <p className="text-gray-400 mt-3">
                        Browse the library and add a lift to get today moving.
                    </p>

                    <Link
                        href="/"
                        className="inline-block mt-6 bg-lime-400 text-black font-bold px-6 py-3 rounded-full"
                    >
                        Go to workouts
                    </Link>

                </div>
            )}

            {/* for saved */}

            {activeTab === "saved" && savedWorkouts.length && (
                <div className="mt-16 text-center">

                    <h2 className="text-2xl font-bold">
                        NOTHING HERE YET
                    </h2>

                    <p className="text-gray-400 mt-3">
                        Browse the library and add a lift to get today moving.
                    </p>

                    <Link
                        href="/"
                        className="inline-block mt-6 bg-lime-400 text-black font-bold px-6 py-3 rounded-full"
                    >
                        Go to workouts
                    </Link>

                </div>
            )}

        </main>
    );
};

export default MyPlanPage;