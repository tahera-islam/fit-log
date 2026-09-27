"use client";

import { useState } from "react";

const WorkoutActions = ({ workout }) => {
    const [message, setMessage] = useState("");

    const handleAddToPlan = () => {
        const existingWorkouts = localStorage.getItem("todayPlan");

        let todayPlan = [];

        if (existingWorkouts) {
            todayPlan = JSON.parse(existingWorkouts);
        }
        const alreadyAdded = todayPlan.some(
            (item) => item.id === workout.id
        );

        if (alreadyAdded) {
            setMessage("This workout is already in today's plan.");
            return;
        }

        if (todayPlan.length >= 5) {
            setMessage("You can add maximum 5 workouts.");
            return;
        }

        todayPlan.push(workout);

        localStorage.setItem(
            "todayPlan",
            JSON.stringify(todayPlan)
        );

        setMessage("Added to Today's Plan!");
    };
    const handleSaveForLater = () => {
        const existingSaved = localStorage.getItem("savedWorkout");

        let savedList = [];

        if (existingSaved) {
            const oldData = JSON.parse(existingSaved);

            if (Array.isArray(oldData)) {
                savedList = oldData;
            } else {
                savedList = [oldData];
            }
        }

        const alreadySaved = savedList.some(
            (item) => item.id === workout.id
        );

        if (alreadySaved) {
            setMessage("This workout is already saved.");
            return;
        }

        if (savedList.length >= 5) {
            setMessage("You can save maximum 5 workouts.");
            return;
        }

        savedList.push(workout);

        localStorage.setItem(
            "savedWorkout",
            JSON.stringify(savedList)
        );

        setMessage("Saved for Later!");
    };

    return (
        <div className="flex flex-col sm:flex-row gap-4 mt-8">

            {/* Add to Plan */}
            <button
                onClick={handleAddToPlan}
                className="flex items-center justify-center gap-2 bg-lime-400 hover:bg-lime-300 text-black font-bold py-3 px-6 rounded-full transition duration-200"
            >
                <span className="text-lg">+</span>
                Add to Today's Plan
            </button>

            {/* Save for Later */}
            <button 
                onClick={handleSaveForLater}
                className="flex items-center justify-center gap-2 border border-gray-600 hover:border-gray-400 text-white py-3 px-6 rounded-full transition duration-200"
            >
                <span>🔖</span>
                Save for Later
            </button>

            {message && (
                <p className="text-lime-400">
                    {message}
                </p>
            )}

        </div>
    );
};

export default WorkoutActions;