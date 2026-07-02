

function AnnouncementCard({ data }) {
  if (!data) return null;

  const { title, banner_image, category, snippet, published_at } = data;

  const isImportant = category === 'Pengumuman Penting';

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Banner Image */}
      <div className="relative w-full h-60 overflow-hidden bg-gray-50">
        <img 
          src={banner_image || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80'} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
        />
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-3">
        <div>
          {/* Header (Category & Date) */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
              isImportant 
                ? 'bg-red-50 text-red-600 border-red-100' 
                : 'bg-blue-50 text-yellow-600 border-yellow-100'
            }`}>
              {category}
            </span>
            <span className="text-[11px] text-gray-400 font-medium">
              {published_at}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-sm font-bold text-gray-800 line-clamp-2 mb-2 group-hover:text-primary transition-colors leading-snug">
            {title}
          </h3>
        </div>

        {/* Snippet / Preview Text */}
        <p className="text-[11px] text-gray-500 line-clamp-3 leading-relaxed font-normal">
          {snippet}
        </p>
      </div>
    </div>
  );
}

export default AnnouncementCard;
