const StatCard = ({ number, title }) => {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:scale-105 transition duration-300">

      <h1 className="text-5xl font-bold text-blue-500">
        {number}
      </h1>

      <p className="text-gray-300 mt-3">
        {title}
      </p>

    </div>
  );
};

export default StatCard;