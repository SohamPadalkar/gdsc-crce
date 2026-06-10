import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex justify-center items-center">

            {/* HUD */}

            <div className="absolute top-10 left-10">

                <p className="text-[#4285F4] text-sm tracking-[6px]">
                    GDSC
                </p>

                <p className="text-gray-500">
                    CRCE 2025
                </p>

            </div>

            <div className="absolute top-10 right-10 text-right">

                <p className="text-[#EA4335]">
                    MEMBERS
                </p>

                <h1 className="text-4xl font-bold">
                    500+
                </h1>

            </div>

            <div className="text-center">

                <h1 className="f1 text-8xl lg:text-[9rem] text-white tracking-wider">

                    GDSC CRCE

                </h1>

                <p className="mt-5 uppercase tracking-[10px] text-gray-400">

                    GOOGLE DEVELOPER STUDENT CLUBS

                </p>

                <button className="mt-12 bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">

                    Explore

                </button>

            </div>

            <FaArrowDown
                className="absolute bottom-10 animate-bounce text-gray-500"
                size={24}
            />

        </section>
    );
};

export default Hero;