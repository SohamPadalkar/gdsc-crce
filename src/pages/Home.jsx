import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import EventCard from "../components/EventCard";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-[#050816] text-white">

        <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">

          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] top-20 left-20"></div>

          <div className="absolute w-96 h-96 bg-green-500/20 rounded-full blur-[120px] bottom-10 right-10"></div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black text-center z-10"
          >
            Google Developer
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-black text-blue-500 text-center z-10"
          >
            Student Clubs
          </motion.h1>

          <p className="mt-8 text-xl text-gray-300 z-10">
            Learn • Build • Connect • Grow
          </p>

          <button className="mt-10 px-8 py-4 rounded-xl bg-blue-500 hover:scale-105 transition z-10">
            Explore Events
          </button>

        </section>

        <section className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6 pb-24">

          <StatCard number="500+" title="Students" />

          <StatCard number="50+" title="Events" />

          <StatCard number="20+" title="Projects" />

          <StatCard number="15+" title="Core Members" />

        </section>

        <section className="max-w-7xl mx-auto px-6 py-20">

          <h1 className="text-5xl font-bold mb-10">
            Past Events
          </h1>

          <div className="grid md:grid-cols-3 gap-8">

            <EventCard
              title="Hackathon 2025"
              date="March 2025"
            />

            <EventCard
              title="AI Bootcamp"
              date="January 2025"
            />

            <EventCard
              title="Flutter Workshop"
              date="December 2024"
            />

          </div>

        </section>



      </div>
    </div>
  );
};

export default Home;