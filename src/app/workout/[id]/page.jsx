import React from 'react';
import Image from 'next/image';

const getWorkout = async(id) => {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    const workout = await res.json();
    return workout;
}

const WorkoutDetailsPage = async ({ params }) => {
    const { id } = await params;
    const workout = await getWorkout(id);

    return (
        <section className="bg-[#000000] max-w-7xl mx-auto px-6 py-16 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* LEFT SIDE */}
                <div className="rounded-3xl overflow-hidden">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        width={700}
                        height={700}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* RIGHT SIDE */}
                <div>

                    {/* Title */}
                    <h1 className="text-4xl font-bold uppercase">
                        {workout.name}
                    </h1>

                    {/* Description */}
                    <p className="text-gray-400 mt-4">
                        {workout.description}
                    </p>

                    {/* Category Pills */}
                    <div className="flex gap-3 flex-wrap mt-6">
                        {workout.muscleGroups.map((group) => (
                            <span
                                key={group}
                                className="border border-gray-600 rounded-full px-4 py-2 text-sm"
                            >
                                {group}
                            </span>
                        ))}
                    </div>

                    {/* Specs */}
                    <div className="bg-[#151922] rounded-2xl p-5 mt-8 space-y-4">
                        <div className="flex justify-between">
                            <span>Equipment</span>
                            <span>{workout.equipment}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Difficulty</span>
                            <span>{workout.difficulty}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Sets</span>
                            <span>{workout.sets}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Reps</span>
                            <span>{workout.reps}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Duration</span>
                            <span>{workout.duration} min</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Calories</span>
                            <span>{workout.caloriesBurned} kcal</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Rating</span>
                            <span>⭐ {workout.rating}</span>
                        </div>
                    </div>

                    <div>
                        <h3 className='text-[#FFFFFF] font-extrabold my-4'>INTRUCTIONS</h3>
                        <ol className='list-decimal space-y-3 pl-3'>
                            <li>Lie on the bench with eyes under the bar and feet planted.</li>
                            <li>Unrack with locked elbows and lower the bar to mid-chest.</li>
                            <li>Press up in a slight arc until elbows lock without bouncing.</li>
                            <li>Keep shoulder blades pinched and a natural arch in the back.</li>
                        </ol>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default WorkoutDetailsPage;