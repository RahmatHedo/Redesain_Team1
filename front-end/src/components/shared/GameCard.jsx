

function GameCard({ data }) {
  if (!data) return null;

  const {
    title,
    thumbnail,
    rating_age,
    genres = [],
    players_count,
    tag,
    tagColor = 'bg-blue-600 text-white',
    icon
  } = data;

  return (
    <div className="group relative w-full bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative w-full h-58 overflow-hidden bg-gray-100">
        <img 
          src={thumbnail || 'https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?w=600&auto=format&fit=crop&q=80'} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Image overlay badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          {tag && (
            <span className={`text-[10px] font-bold px-3 py-1 rounded-full shadow-xs uppercase tracking-wider ${tagColor}`}>
              {tag}
            </span>
          )}
          {icon && (
            <div className="w-15 h-15 flex items-center justify-center p-1.5">
              <img src={icon} alt={`Rating ${rating_age}`} className="w-full h-full object-contain" />
            </div>
          )}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Title */}
          <h3 className="text-base font-bold text-gray-800 line-clamp-1 mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          {/* Genres */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {genres.map((genre, idx) => (
              <span 
                key={idx} 
                className="text-[10px] font-medium text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>

        <div>
          {/* Players Count & Meta */}
          <div className="flex items-center justify-between border-t border-gray-100 pt-3.5 mb-4">
            <div className="flex items-center gap-1 text-gray-400">
              <i className="bi bi-phone text-xs"></i>
              <i className="bi bi-laptop text-xs"></i>
            </div>
            <div className="flex items-center gap-1.5 text-gray-500">
              <i className="bi bi-people text-sm text-gray-400"></i>
              <span className="text-xs font-medium">{players_count || '1.2k Pemain'}</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <button className="w-full bg-[#1B4685] hover:bg-[#15386C] text-white text-xs font-semibold py-2.5 rounded-full transition-all shadow-xs hover:shadow-md cursor-pointer text-center">
            Lihat Detail
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameCard;