const EventCard = ({ title, date }) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:-translate-y-2 transition">

      <div className="h-40 rounded-xl bg-gradient-to-br from-blue-500 to-green-500"></div>

      <h2 className="text-2xl font-bold mt-5">
        {title}
      </h2>

      <p className="text-gray-400 mt-2">
        {date}
      </p>

      <button className="mt-5 bg-blue-500 px-4 py-2 rounded-lg">
        View Details
      </button>

    </div>
  );
};

export default EventCard;