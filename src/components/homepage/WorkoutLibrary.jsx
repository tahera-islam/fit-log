import WorkoutCard from "./WorkoutCard";

const getCards = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const cards = await res.json();
    return cards;
}

const WorkoutLibrary = async() => {
    const cards = await getCards();
    return (
        <section
            id="library"
            className="max-w-7xl mx-auto px-6 py-20"
        >

            {/* Heading */}
            <div className="mb-10">
                <h2 className="text-4xl font-bold text-white">
                    THE LIBRARY
                </h2>

                <p className="text-gray-400 mt-2">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            {/* Workout Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                {cards.map((card) => (
                    <WorkoutCard
                        key={card.id}
                        workout={card}
                    />
                ))}
            </div>

        </section>
    );
};

export default WorkoutLibrary;