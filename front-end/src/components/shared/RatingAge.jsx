// components/RatingAge.jsx

function RatingAge({ data }) {
  if (!data) return null;

  const { rating_age, total_games, label, colorClass, icon } = data;

  return (
    <div
      className={`flex flex-col items-center justify-between p-6 rounded-2xl shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 w-full max-w-[180px]  ${colorClass || "bg-white border-gray-100 text-gray-700"}`}
    >
      {/* Game count badge */}
      <div className="flex items-center justify-center">
        <i className="bi bi-controller text-lg px-2"></i>

        <div className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
          <span>{total_games} Game</span>
        </div>
      </div>

      {/* Age Rating Icon Graphic */}
      <div className="my-4 flex items-center justify-center h-20">
        {icon ? (
          <img
            src={icon}
            alt={`Rating ${rating_age}`}
            className="h-16 object-contain hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center font-bold text-lg text-gray-700">
            {rating_age}
          </div>
        )}
      </div>

      {/* Label */}
      <div className="text-center">
        <span className="text-sm font-semibold text-current block">
          {label}
        </span>
      </div>
    </div>
  );
}

export default RatingAge;
