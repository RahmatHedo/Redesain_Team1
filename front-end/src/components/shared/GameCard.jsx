// components/GameCard.jsx
function GameCard() {
  return (
    <div className="relative max-w-xs bg-white rounded-xl shadow-md overflow-hidden">
      {/* Gambar */}
      <img src="" alt="" className="w-full h-48 object-cover"/>
      
      <div className="absolute z-20 top-2  justify-between flex items-center w-full px-4">
          <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            Trending
          </span>
          <img src="" alt="" className="w-6 h-6 "/>
        </div>
      
      {/* Konten */}
      <div className="p-4">
        
        
        {/* Judul */}
        <h2 className="text-lg font-bold text-dark mb-2">
          Petualangan Seru di Dunia Fantasi
        </h2>
        
        {/* Genre */}
        {/* <div className="flex gap-2 mb-2">
          {data.genres.map((genre, index) => (
            <span key={index} className="text-sm text-gray-600">
              {genre}
              {index < data.genres.length - 1 && " • "}
            </span>
          ))}
        </div> */}

        <div className="flex flex-row items-center justify-between mb-2">
             <image src="" alt="" className="w-6 h-6 mb-2"/>
            <p className="text-sm text-gray-500 mb-3">
            1000 Pemain
        </p>
        </div>

        
       
        
        {/* Tombol */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-3xl transition-colors">
          Lihat Detail
        </button>
      </div>
    </div>
  );
}

export default GameCard;