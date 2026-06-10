const Events = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Events
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white/5 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold">
            Hackathon 2025
          </h2>

          <p className="mt-3 text-gray-400">
            Build amazing projects in 24 hours.
          </p>

          <button className="mt-5 bg-blue-500 px-5 py-2 rounded-lg">
            Register
          </button>
        </div>

      </div>

    </div>
  );
};

export default Events;