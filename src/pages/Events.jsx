
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Footer from "../components/Footer";
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import { useState } from "react";
import { auth, db } from "../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import toast from "react-hot-toast";

const allEvents = [
    {
        title: "Pitch Perfect",
        type: "Workshop",
        date: "15 JULY 2025",
        seats: "120 Seats",
        color: "#4285F4",
    },
    {
        title: "Bit N Build 2025",
        type: "Hackathon",
        date: "22 JULY 2025",
        seats: "250 Seats",
        color: "#34A853",
    },
    {
        title: "AGILE",
        type: "Workshop",
        date: "30 JULY 2025",
        seats: "80 Seats",
        color: "#FBBC05",
    },
    {
        title: "UNPLUG",
        type: "Networking",
        date: "10 AUGUST 2025",
        seats: "150 Seats",
        color: "#EA4335",
    },
];

const Events = () => {


    const [filter, setFilter] = useState("All");

    const events =
        filter === "All"
            ? allEvents
            : allEvents.filter((event) => event.type === filter);



    const registerForEvent = async (eventName) => {

        if (!auth.currentUser) {
            toast.error("Please login first");
            return;
        }

        try {

            await addDoc(collection(db, "registrations"), {

                email: auth.currentUser.email,

                eventName,

                registeredAt: new Date(),

            });

            toast.success("Registered Successfully!");

        } catch (err) {

            toast.error("Something went wrong");

        }

    };
    return (
        <>
            <Background />
            <Navbar />

            <main className="text-white pt-28">

                <section className="max-w-7xl mx-auto px-8 py-20">

                    <p className="uppercase tracking-[8px] text-gray-500 mb-5">
                        GDSC CRCE
                    </p>

                    <h1 className="f1 text-7xl md:text-8xl">
                        CURRENT EVENTS
                    </h1>

                    <p className="max-w-3xl mt-8 text-xl text-gray-400 leading-9">
                        Join workshops, hackathons and networking sessions
                        designed to help students learn, collaborate and build.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-12">

                        <button
                            onClick={() => setFilter("All")}
                            className={`px-5 py-2 rounded-full ${filter === "All"
                                ? "bg-[#4285F4] text-white"
                                : "border border-white/10 text-white"
                                }`}
                        >
                            All
                        </button>

                        <button
                            onClick={() => setFilter("Workshop")}
                            className={`px-5 py-2 rounded-full ${filter === "Workshop"
                                ? "bg-[#34A853] text-white"
                                : "border border-white/10 text-white"
                                }`}
                        >
                            Workshops
                        </button>

                        <button
                            onClick={() => setFilter("Hackathon")}
                            className={`px-5 py-2 rounded-full ${filter === "Hackathon"
                                ? "bg-[#FBBC05] text-black"
                                : "border border-white/10 text-white"
                                }`}
                        >
                            Hackathons
                        </button>

                        <button
                            onClick={() => setFilter("Networking")}
                            className={`px-5 py-2 rounded-full ${filter === "Networking"
                                ? "bg-[#EA4335] text-white"
                                : "border border-white/10 text-white"
                                }`}
                        >
                            Networking
                        </button>

                    </div>

                </section>

                <section className="max-w-7xl mx-auto px-8 pb-32">

                    <div className="grid lg:grid-cols-2 gap-8">

                        {events.map((event) => (

                            <div
                                key={event.title}
                                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:-translate-y-2 hover:border-white/20 transition duration-500"
                            >

                                <div
                                    className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
                                    style={{
                                        backgroundColor: `${event.color} 20`,
                                        color: event.color,
                                    }}
                                >
                                    {event.type}
                                </div>

                                <h2 className="f1 text-4xl mt-8">
                                    {event.title}
                                </h2>

                                <div className="mt-8 space-y-4 text-gray-400">

                                    <div className="flex items-center gap-3">
                                        <FaCalendarAlt />
                                        {event.date}
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <FaMapMarkerAlt />
                                        CRCE Campus
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <FaUsers />
                                        {event.seats}
                                    </div>

                                </div>

                                <button
                                    onClick={() => registerForEvent(event.title)}
                                    className="mt-10 w-full py-4 rounded-2xl font-bold transition hover:scale-[1.02]"
                                    style={{
                                        backgroundColor: event.color,
                                    }}
                                >
                                    RSVP NOW
                                </button>

                            </div>

                        ))}

                    </div>

                </section>

                <section className="max-w-5xl mx-auto px-8 pb-32 text-center">

                    <p className="uppercase tracking-[8px] text-gray-500 mb-5">
                        Stay Connected
                    </p>

                    <h1 className="f1 text-6xl">
                        MORE EVENTS
                        <br />
                        COMING SOON
                    </h1>

                    <p className="mt-8 text-xl text-gray-400 max-w-2xl mx-auto">

                        Follow GDSC CRCE and never miss upcoming
                        workshops, hackathons and community events.

                    </p>

                </section>

                <Footer />

            </main>
        </>
    );
};

export default Events;

