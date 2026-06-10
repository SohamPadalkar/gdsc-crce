import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Background from "../components/Background";
import WhatWeDo from "../components/WhatWeDo";
import PastEvents from "../components/PastEvents";
import Team from "../components/Team";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Background />

      <Navbar />

      <main className="relative">

        <section id="home">
          <Hero />
        </section>

        <section id="what-we-do">
          <WhatWeDo />
        </section>

        <section id="events">
          <PastEvents />
        </section>

        <section id="team">
          <Team />
        </section>

        <section id="join">
          <CTA />
        </section>

        <Footer />

      </main>
    </>
  );
};

export default Home;