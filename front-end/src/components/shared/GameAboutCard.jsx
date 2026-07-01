// components/GameAboutCard.jsx
function GameAboutCard() {
  return (
    <div className="relative w-[250px] bg-white rounded-3xl overflow-hidden">

      <img src="" alt="" className="w-full h-48 object-cover"/>

      <div className="absolute top-2 right-2">
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">
            SU
          </span>
        </div>

      <div className="flex flex-col gap-2 p-4">
        
            <h3 className="font-bold text-gray-800 text-sm">
            Mobile Legendd
            </h3>
            
            <p className="text-xs text-gray-500">
            Warrr, auhdfiaush
            </p>

            <div className="flex gap-2">
              <i class="bi bi-phone-landscape"></i>
              <i class="bi bi-laptop"></i>
            </div>

            <button className= "text-blue-700 hover:text-blue-700 text-xs font-medium px-4 py-3 border-t border-gray-400 transition-colors">
            Lihat Detail
            </button>
      </div>
    </div>
  );
}

export default GameAboutCard;