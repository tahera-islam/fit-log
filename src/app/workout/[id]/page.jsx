
import React from 'react';
import Image from 'next/image';
import WorkoutActions from '@/components/shared/WorkoutActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const getWorkout = async(id) => {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    const workout = await res.json();
    return workout;
}

const WorkoutDetailsPage = async ({ params }) => {
    const { id } = await params;
    const workout = await getWorkout(id);

    return (
        <section className="bg-[#000000] min-h-screen max-w-7xl mx-auto px-6 py-16 text-white">
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

                    
                    <div className="bg-[#151922] border border-[#9CA3AF] rounded-2xl p-5 mt-8  divide-y divide-gray-800 ">
                        <div className="flex justify-between py-4">
                            <span className='text-[#9CA3AF] uppercase text-xs'>Equipment</span>
                            <span className='text-[#E5E7EB] font-medium'>{workout.equipment}</span>
                        </div>
                        

                        <div className="flex justify-between py-4">
                            <span className='text-[#9CA3AF] uppercase text-xs'>Difficulty</span>
                            <span className='text-[#E5E7EB] font-medium'>{workout.difficulty}</span>
                        </div>
                        

                        <div className="flex justify-between py-4">
                            <span className='text-[#9CA3AF] uppercase text-xs'>Sets</span>
                            <span className='text-[#E5E7EB] font-medium'>{workout.sets}</span>
                        </div>

                        <div className="flex justify-between py-4">
                            <span className='text-[#9CA3AF] uppercase text-xs'>Reps</span>
                            <span className='text-[#E5E7EB] font-medium'>{workout.reps}</span>
                        </div>

                        <div className="flex justify-between py-4">
                            <span className='text-[#9CA3AF] uppercase text-xs'>Duration</span>
                            <span className='text-[#E5E7EB] font-medium'>{workout.duration} min</span>
                        </div>

                        <div className="flex justify-between py-4">
                            <span className='text-[#9CA3AF] uppercase text-xs'>Calories</span>
                            <span className='text-[#E5E7EB] font-medium'>{workout.caloriesBurned} kcal</span>
                        </div>

                        <div className="flex justify-between py-4">
                            <span className='text-[#9CA3AF] uppercase text-xs'>Rating</span>
                            <span className='text-[#E5E7EB] font-medium'>⭐ {workout.rating}</span>
                        </div>
                    </div>

                    <div>
                        <h3 className='text-[#FFFFFF] font-extrabold my-4'>INSTRUCTIONS</h3>
                        <ol className="list-decimal space-y-3 pl-5 mt-4 text-gray-300">
                            {workout.instructions.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                    <WorkoutActions workout={workout} />
                    </div>

                </div>
        </section>
    );
};

export default WorkoutDetailsPage;