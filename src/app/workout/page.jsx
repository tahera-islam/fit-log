"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const WorkoutPage = () => {
    const [workouts, setWorkouts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const response = await fetch(
                    "https://api.abcz.workers.dev/api/fitlog"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch workouts");
                }

                const data = await response.json();

                setWorkouts(data);
            } catch (error) {
                console.log(error);
                setError("Failed to load workouts.");
            } finally {
                setLoading(false);
            }
        };

        fetchWorkouts();
    }, []);

    if (loading) {
        return (
            <main className="bg-black min-h-screen text-white px-6 py-16">
                <p>Loading workouts...</p>
            </main>
        );
    }

    if (error) {
        return (
            <main className="bg-black min-h-screen text-white px-6 py-16">
                <p className="text-red-500">{error}</p>
            </main>
        );
    }

    return (
        <main className="bg-black min-h-screen text-white px-6 py-16">

            {/* Page Header */}
            <section className="max-w-7xl mx-auto">

                <p className="text-lime-400 font-semibold">
                    TRAIN WITH INTENT
                </p>

                <h1 className="text-4xl md:text-6xl font-bold mt-3">
                    WORKOUT LIBRARY
                </h1>

                <p className="text-gray-400 mt-4 max-w-2xl">
                    Explore workouts, build your plan, and train with purpose.
                </p>

            </section>

            {/* Workout Library */}
            <section className="max-w-7xl mx-auto mt-12">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {workouts.map((workout) => (

                        <div
                            key={workout.id}
                            className="bg-[#151515] rounded-2xl overflow-hidden"
                        >

                            {/* Image */}
                            <Image
                                src={workout.image}
                                alt={workout.name}
                                width={600}
                                height={400}
                                className="w-full h-56 object-cover"
                            />

                            {/* Content */}
                            <div className="p-5">

                                <h2 className="text-2xl font-bold uppercase">
                                    {workout.name}
                                </h2>

                                <p className="text-gray-400 mt-2">
                                    {workout.equipment}
                                </p>

                                {/* Muscle Groups */}
                                <div className="flex flex-wrap gap-2 mt-4">

                                    {workout.muscleGroups?.map((muscle) => (
                                        <span
                                            key={muscle}
                                            className="text-xs border border-gray-700 px-3 py-1 rounded-full text-gray-300"
                                        >
                                            {muscle}
                                        </span>
                                    ))}

                                </div>

                                {/* Workout Information */}
                                <div className="grid grid-cols-2 gap-3 mt-5 text-sm">

                                    <div>
                                        <p className="text-gray-500">
                                            DIFFICULTY
                                        </p>

                                        <p className="font-semibold mt-1">
                                            {workout.difficulty}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-gray-500">
                                            DURATION
                                        </p>

                                        <p className="font-semibold mt-1">
                                            {workout.duration} min
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-gray-500">
                                            CALORIES
                                        </p>

                                        <p className="font-semibold mt-1">
                                            {workout.caloriesBurned} kcal
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-gray-500">
                                            RATING
                                        </p>

                                        <p className="font-semibold mt-1">
                                            ⭐ {workout.rating}
                                        </p>
                                    </div>

                                </div>

                                {/* Button */}
                                <Link
                                    href={`/workout/${workout.id}`}
                                    className="block text-center bg-lime-400 text-black font-bold py-3 rounded-full mt-6"
                                >
                                    View Details
                                </Link>

                            </div>

                        </div>

                    ))}

                </div>

            </section>

        </main>
    );
};

export default WorkoutPage;