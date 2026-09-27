"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Workout", path: "/workout" },
        { name: "My Plan", path: "/my-plan" },
    ];

    const [planCount, setPlanCount] = useState(0);
    const [savedCount, setSavedCount] = useState(0);

    useEffect(() => {
        const todayPlan = localStorage.getItem("todayPlan");
        const savedWorkout = localStorage.getItem("savedWorkout");

        if (todayPlan) {
            const plan = JSON.parse(todayPlan);
            setPlanCount(plan.length);
        }

        if (savedWorkout) {
            setSavedCount(1);
        }
    }, []);

    return (
        <nav className="bg-black border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/Images/logo.png"
                        alt="FitLog Logo"
                        width={28}
                        height={28}
                        priority
                    />
                    <h1 className="text-[#FFFFFF] text-lg font-bold">FITLOG</h1>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`px-5 py-2 rounded-full font-medium transition-all ${pathname === link.path
                                ? "bg-[#1A2312] text-[#C2F800]"
                                : "text-[#D1D5DB] hover:text-white hover:bg-[#1A2312]"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right Side Badges */}
                <div className="hidden md:flex items-center gap-3">
                    {/* Plan Badge */}
                    <div className="bg-[#C2F800] text-black px-4 py-2 rounded-full flex items-center gap-2 font-semibold">
                        <span>Plan</span>
                        <span className="bg-black text-[#C2F800] w-6 h-6 rounded-full flex items-center justify-center text-sm">
                            {planCount}
                        </span>
                    </div>

                    {/* Saved Badge */}
                    <div className="border border-[#C2F800] text-[#C2F800] px-4 py-2 rounded-full flex items-center gap-2 font-semibold">
                        <span>Saved</span>
                        <span className="border border-[#C2F800] w-6 h-6 rounded-full flex items-center justify-center text-sm">
                            {savedCount}
                        </span>
                    </div>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-white"
                >
                    {menuOpen ? (
                        // Close Icon
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-7 h-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
                        </svg>
                    ) : (
                        // Hamburger Icon
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-7 h-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden border-t border-gray-800 px-5 py-4 bg-black">
                    <div className="flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                onClick={() => setMenuOpen(false)}
                                className={`px-4 py-3 rounded-full font-medium ${pathname === link.path
                                    ? "bg-[#1A2312] text-[#C2F800]"
                                    : "text-[#D1D5DB]"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="flex gap-3 pt-3">
                            {/* Plan Badge */}
                            <div className="bg-[#C2F800] text-black px-4 py-2 rounded-full flex items-center gap-2 font-semibold">
                                <span>Plan</span>
                                <span className="bg-black text-[#C2F800] w-6 h-6 rounded-full flex items-center justify-center text-sm">
                                    {planCount}
                                </span>
                            </div>

                            {/* Saved Badge */}
                            <div className="border border-[#C2F800] text-[#C2F800] px-4 py-2 rounded-full flex items-center gap-2 font-semibold">
                                <span>Saved</span>
                                <span className="border border-[#C2F800] w-6 h-6 rounded-full flex items-center justify-center text-sm">
                                    {savedCount}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

