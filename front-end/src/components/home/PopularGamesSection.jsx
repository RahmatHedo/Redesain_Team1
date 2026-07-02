import GameCard from '../shared/GameCard';
import { POPULAR_GAMES } from '../../constants/dummyData';

function PopularGamesSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header with Navigation Arrows */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-10 md:mb-12">
          <div>
            <h2 className="text-2xl md:text-3.5xl font-extrabold text-[#1B4685] mb-3">
              Game Populer
            </h2>
            <p className="text-sm text-gray-500 font-medium leading-relaxed">
              Game yang paling banyak dimainkan minggu ini.
            </p>
          </div>
          
          {/* Mock Navigation Buttons (UI Only) */}
          <div className="flex gap-2.5">
            <button 
              type="button" 
              className="w-10 h-10 rounded-full border border-gray-200 bg-white text-gray-500 flex items-center justify-center hover:bg-[#1B4685] hover:text-white hover:border-[#1B4685] transition-all cursor-pointer shadow-xs"
              aria-label="Previous game"
            >
              <i className="bi bi-chevron-left font-bold text-sm"></i>
            </button>
            <button 
              type="button" 
              className="w-10 h-10 rounded-full border border-gray-200 bg-white text-gray-500 flex items-center justify-center hover:bg-[#1B4685] hover:text-white hover:border-[#1B4685] transition-all cursor-pointer shadow-xs"
              aria-label="Next game"
            >
              <i className="bi bi-chevron-right font-bold text-sm"></i>
            </button>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center items-stretch">
          {POPULAR_GAMES.map((game) => (
            <div key={game.id} className="flex justify-center h-full">
              <GameCard data={game} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default PopularGamesSection;
