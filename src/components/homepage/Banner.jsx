// import Image from 'next/image';
// import React from 'react';

// const Banner = () => {
//     return (
//         <div className='flex'>
//             <div className='mx-6 mb-16 mt-12 px-14.5 py-18.25'>
//                 <p className='font-bold text-xs leading-[16.5px] text-[#C2F800]'>WORKOUT LIBRARY</p>
//                 <h1 className='font-extrabold leading-15 text-6xl text-[#FFFFFF] my-5'>TRAIN WITH INTENT.LOG ,<br />EVERY SET.</h1>
//                 <p className='leading-6 text-[#9CA3AF] mb-5'>FitLog is a dark, no-nonsense   gym companion: pick a lift, lock it
//                     into today's plan, and watch the week's work add up.</p>

//                 <button className='bg-[#C2F800] text-[#000000] py-3 px-6 font-bold text-xs leading-4'>BROWSE WORKOUTS</button>
//             </div>

//             <div>
//                 <Image 
//                     src="/Images/banner.png"
//                     alt="FitLog Logo"
//                     width={334}
//                     height={334}
//                     /> 
//             </div>
//         </div>
//     );
// };

// export default Banner;


import Image from "next/image";

const Banner = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">

                {/* Left Content */}
                <div className="md:w-1/2 mx-w-xl">
    
                    <p className="text-xs font-bold text-[#C2F800] tracking-widest mb-4">
                        WORKOUT LIBRARY
                    </p>

                    
                    <h1 className="font-extrabold leading-tight text-5xl md:text-6xl text-[#FFFFFF] my-5 whitespace-nowrap">
                        TRAIN WITH INTENT.
                        <br /> LOG EVERY SET.
                    </h1>

                   
                    <p className="text-[#9CA3AF] leading-7 mb-8">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>

                   
                    <a
                        href="#library"
                        className="inline-flex items-center gap-2 bg-[#C2F800] text-black px-6 py-3 rounded-md font-bold text-sm"
                    >
                        BROWSE WORKOUT
                    </a>
                </div>

                {/* Right Image */}
                <div className="md:w-1/2 flex justify-center ml-56.5">
                    <Image
                        src="/Images/banner.png"
                        alt="Workout Banner"
                        width={450}
                        height={450}
                        priority
                        className="w-full max-w-112.5 h-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;