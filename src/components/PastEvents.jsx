const events = [
    {
        no: "01",
        title: "UNPLUG",
        subtitle: "Community Networking",
        desc: "Connecting students, professionals and innovators through technology and collaboration.",
        color: "#4285F4",
        tags: ["Community", "Networking", "Growth"],
    },
    {
        no: "02",
        title: "BIT N BUILD",
        subtitle: "Flagship Hackathon",
        desc: "48 hours of innovation where students transformed ideas into impactful solutions.",
        color: "#34A853",
        tags: ["Hackathon", "Innovation", "AI"],
    },
    {
        no: "03",
        title: "AGILE",
        subtitle: "Product Development",
        desc: "Learning modern software development through agile practices and teamwork.",
        color: "#FBBC05",
        tags: ["Agile", "Scrum", "Product"],
    },
    {
        no: "04",
        title: "FUTURE FORGE",
        subtitle: "AI & Innovation",
        desc: "Mentoring for Freshers",
        color: "#4285F4",
        tags: ["AI", "Future", "ML"],
    },
    {
        no: "05",
        title: "WHAT IF VENTURES",
        subtitle: "Entrepreneurship",
        desc: "Helping students transform bold ideas into startup opportunities.",
        color: "#34A853",
        tags: ["Startup", "Business", "Pitch"],
    },
    {
        no: "06",
        title: "IDEA CAFE",
        subtitle: "Ideation Session",
        desc: "A collaborative brainstorming experience for future innovators.",
        color: "#EA4335",
        tags: ["Ideas", "Design", "Innovation"],
    },
    {
        no: "07",
        title: "PITCH PERFECT",
        subtitle: "Pitching Workshop",
        desc: "Students learn how to present their ideas before mentors and industry experts.",
        color: "#FBBC05",
        tags: ["Pitch", "Startup", "Presentation"],
    },
];

const PastEvents = () => {
    return (
        <section className="max-w-6xl mx-auto px-8 py-32 text-white">

            <div className="text-center mb-24">

                <p className="uppercase tracking-[8px] text-gray-500 mb-4">
                    Our Journey
                </p>

                <h2 className="text-6xl font-bold">
                    Past Events
                </h2>

                <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
                    Every event reflects our commitment to learning,
                    collaboration and innovation.
                </p>

            </div>

            <div>

                {events.map((event) => (

                    <div
                        key={event.no}
                        className="border-b border-white/10 py-12 hover:pl-6 transition-all duration-500"
                    >

                        <div className="grid lg:grid-cols-12 gap-6">

                            <div className="lg:col-span-1 text-3xl text-gray-500 font-bold">
                                {event.no}
                            </div>

                            <div className="lg:col-span-4">

                                <p
                                    className="uppercase tracking-[5px] text-sm mb-2"
                                    style={{ color: event.color }}
                                >
                                    {event.subtitle}
                                </p>

                                <h2
                                    className="f1 text-4xl"
                                    style={{ color: event.color }}
                                >
                                    {event.title}
                                </h2>

                            </div>

                            <div className="lg:col-span-7">

                                <p className="text-gray-400 leading-8 text-lg">
                                    {event.desc}
                                </p>

                                <div className="flex flex-wrap gap-3 mt-6">

                                    {event.tags.map((tag) => (

                                        <span
                                            key={tag}
                                            className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm"
                                        >
                                            {tag}
                                        </span>

                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
};

export default PastEvents;