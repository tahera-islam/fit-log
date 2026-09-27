
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-black text-white border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-8">

                <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                    {/* Left - Logo */}
                    <div className="flex items-center gap-3">
                        <Image
                            src="/Images/logo.png"
                            alt="FitLog"
                            width={32}
                            height={32}
                        />

                        <span className="text-xl font-bold tracking-wide">
                            FITLOG
                        </span>
                    </div>

                    {/* Right - Copyright */}
                    <p className="text-sm text-gray-400 text-center md:text-right">
                        © 2026 FitLog — Workout Library. Train hard, log honest.
                    </p>

                </div>

            </div>
        </footer>
    );
};

export default Footer;
