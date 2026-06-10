const CTA = () => {
    return (
        <section className="relative py-40 px-8 overflow-hidden">

            <div className="absolute inset-0">

                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#4285F4]/5 blur-[180px]"></div>

            </div>

            <div className="relative max-w-5xl mx-auto text-center">

                <p className="uppercase tracking-[8px] text-gray-500 mb-6">

                    Join The Community

                </p>

                <h1 className="f1 text-6xl md:text-8xl text-white leading-tight">

                    BUILD THE
                    <br />
                    FUTURE.

                </h1>

                <p className="mt-10 text-xl text-gray-400 max-w-2xl mx-auto leading-9">

                    Become a part of a community that learns,
                    innovates and creates impactful technology.

                </p>

                <button className="mt-14 px-10 py-5 rounded-full bg-white text-black font-bold hover:scale-105 duration-300">

                    Join GDSC

                </button>

            </div>

        </section>
    );
};

export default CTA;