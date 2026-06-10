import {
    FaLightbulb,
    FaUsers,
    FaCode,
    FaRocket,
} from "react-icons/fa";

const items = [
    {
        no: "01",
        title: "IDEATE",
        icon: FaLightbulb,
        desc:
            "Every breakthrough starts with an idea. We encourage students to think beyond the classroom and solve real problems.",
        color: "#FBBC05",
    },
    {
        no: "02",
        title: "COLLABORATE",
        icon: FaUsers,
        desc:
            "Connect with developers, designers and innovators through workshops, hackathons and community events.",
        color: "#4285F4",
    },
    {
        no: "03",
        title: "INNOVATE",
        icon: FaCode,
        desc:
            "Explore AI, Web, Cloud and Mobile technologies while building practical projects.",
        color: "#EA4335",
    },
    {
        no: "04",
        title: "IMPACT",
        icon: FaRocket,
        desc:
            "Turn your skills into solutions that benefit communities and inspire change.",
        color: "#34A853",
    },
];

const WhatWeDo = () => {
    return (
        <section className="max-w-7xl mx-auto px-8 py-32 text-white">

            <div className="text-center mb-24" >

                <p className="tracking-[8px] uppercase text-gray-500 mb-4">
                    Our Mission
                </p>

                <h2 className="text-6xl font-bold">
                    What We Do
                </h2>

                <p className="max-w-3xl mx-auto mt-8 text-gray-400 text-xl leading-9">
                    We build a culture of innovation by bringing together
                    passionate students who love technology, collaboration
                    and solving real-world problems.
                </p>

            </div>

            <div className="group-hover:border-l-4">

                {items.map((item) => {

                    const Icon = item.icon;

                    return (

                        <div
                            key={item.no}
                            className="group py-12 border-b border-white/10 hover:bg-white/[0.02] transition-all duration-500"
                        >

                            <div className="grid grid-cols-12 gap-6 items-center">

                                <div className="col-span-1 text-2xl text-gray-500 font-bold">

                                    {item.no}

                                </div>

                                <div className="col-span-1">

                                    <div
                                        className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                                        style={{
                                            backgroundColor: `${item.color}20`,
                                            color: item.color,
                                        }}
                                    >

                                        <Icon size={24} />

                                    </div>

                                </div>

                                <div className="col-span-3">

                                    <h1 className="text-4xl font-bold tracking-wide group-hover:text-white transition">

                                        {item.title}

                                    </h1>

                                </div>

                                <div className="col-span-7">

                                    <p className="text-gray-400 text-lg leading-8 group-hover:text-gray-200 transition">

                                        {item.desc}

                                    </p>

                                </div>

                            </div>

                        </div>

                    );
                })}

            </div>

        </section>
    );
};

export default WhatWeDo;