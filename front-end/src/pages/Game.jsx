import { useState, useMemo } from "react";
import GameCard from "../components/shared/GameAboutCard";
import { GAME_CARDS } from "../constants/dummyData";

const RATING_FILTERS = ["3+", "7+", "13+", "18+"];

const ratingColorMap = {
  "3+": "bg-blue-100 text-blue-700",
  "7+": "bg-green-100 text-green-700",
  "13+": "bg-yellow-100 text-yellow-700",
  "18+": "bg-red-100 text-red-700",
};

function Game() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRating, setSelectedRating] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredGames = useMemo(() => {
    return GAME_CARDS.filter((game) => {
      const matchesSearch = game.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesRating = selectedRating
        ? game.rating_age === selectedRating
        : true;
      return matchesSearch && matchesRating;
    });
  }, [searchQuery, selectedRating]);

  const totalPages = 24; 

  return (
    <main className="bg-background min-h-screen px-16">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <div className="bg-blue-50 max-w-6xl mx-auto px-16 py-10 rounded-2xl ">
          <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-2">
            Temukan Lebih Banyak Game
          </h1>
          <p className="text-sm text-gray-500">
            Menampilkan 2.450 game terdaftar dengan rating resmi IGRS.
          </p>
        </div>
      </section>


      <section className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row md:items-center justify-center gap-2">
          {/* Search input */}
          <div className="relative flex-none">
            
            <i class="bi bi-search absolute left-3 top-1/3 -translate-y-1/2 w-4 h-4 text-gray-400"></i>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Cari judul game, publisher..."
              className="w-xl pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Rating dropdown */}
          <div className="relative">
            <select
              value={selectedRating ?? ""}
              onChange={(e) => {
                setSelectedRating(e.target.value || null);
                setCurrentPage(1);
              }}
              className="appearance-none pl-4 pr-8 py-2.5 text-sm border border-gray-200 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Semua Rating</option>
              {RATING_FILTERS.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          {/* Quick rating chips */}
          <div className="flex items-center gap-2">
            {RATING_FILTERS.map((r) => {
              const isActive = selectedRating === r;
              return (
                <button
                  key={r}
                  onClick={() => {
                    setSelectedRating(isActive ? null : r);
                    setCurrentPage(1);
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                    isActive
                      ? "bg-blue-700 text-white"
                      : ratingColorMap[r]
                  }`}
                >
                  {r}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Game grid */}
      <section className="max-w-6xl mx-auto px-6 pb-6">
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500 text-center py-16">
            Tidak ada game yang cocok dengan pencarian kamu.
          </p>
        )}
      </section>

      {/* Pagination */}
      <section className="max-w-6xl mx-auto px-6 pb-14">
        <div className="flex items-center justify-center gap-1.5">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="w-8 h-8 flex items-center justify-center rounded-full text-sm text-gray-500 hover:bg-gray-100 disabled:opacity-40"
          >
            ‹
          </button>

          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition ${
                currentPage === page
                  ? "bg-blue-700 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}

          <span className="text-sm text-gray-400 px-1">...</span>

          <button
            onClick={() => setCurrentPage(totalPages)}
            className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition ${
              currentPage === totalPages
                ? "bg-blue-700 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {totalPages}
          </button>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="w-8 h-8 flex items-center justify-center rounded-full text-sm text-gray-500 hover:bg-gray-100 disabled:opacity-40"
          >
            ›
          </button>
        </div>
      </section>
    </main>
  );
}

export default Game;