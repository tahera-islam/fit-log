
import Link from "next/link";
import Image from "next/image";

const WorkoutCard = ({ workout }) => {
    return (
        <Link href={`/workout/${workout.id}`}>
            <div className="bg-[#151515] rounded-2xl overflow-hidden hover:scale-[1.02] transition cursor-pointer">

                {/* Image */}
                <div className="h-64">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        width={500}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Card Content */}
                <div className="p-5">

                    {/* Muscle Groups */}
                    <div className="flex flex-wrap gap-2 mb-3">
                        {workout.muscleGroups.map((group) => (
                            <span
                                key={group}
                                className="text-xs border border-gray-600 rounded-full px-3 py-1 text-gray-300"
                            >
                                {group.toUpperCase()}
                            </span>
                        ))}
                    </div>

                    {/* Workout Name */}
                    <h3 className="text-xl font-bold text-white uppercase">
                        {workout.name}
                    </h3>

                    {/* Equipment */}
                    <p className="text-gray-400 mt-2">
                        {workout.equipment}
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-4 mt-5 text-sm text-gray-400">
                        <span>⏱ {workout.duration} min</span>

                        <span>🔥 {workout.caloriesBurned} kcal</span>

                        <span>⭐ {workout.rating}</span>
                    </div>

                </div>
            </div>
        </Link>
    );
};

export default WorkoutCard;
