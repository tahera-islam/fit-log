"use client";

import { useState } from "react";

const WorkoutActions = ({ workout }) => {
    const [message, setMessage] = useState("");

    const handleAddToPlan = () => {
        localStorage.setItem("todayPlan", JSON.stringify(workout));
        setMessage("Added to Today's Plan!");
    };
    const handleSaveForLater = () => {
        localStorage.setItem("savedWorkout", JSON.stringify(workout));

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