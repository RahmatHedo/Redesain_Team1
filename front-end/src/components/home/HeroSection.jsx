import { useState } from 'react';

function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Future API search integration point
  };

  const popularKeywords = ['Roblox', 'Minecraft', 'Mobile Legends'];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1B4F93] via-[#1F5FA8] to-[#2E78C5] pt-12 pb-20 md:py-28 text-white">
      {/* Decorative background glow circles */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-sky-300/20 blur-3xl"></div>
      <div className="absolute bottom-[-12%] right-[-8%] w-[48%] h-[48%] rounded-full bg-indigo-200/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12  items-center relative z-10">
        
        {/* Left Content (Text & Controls) */}
        <div className="flex flex-col items-start text-left max-w-xl">
          {/* Welcome Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/40 text-xs font-semibold text-blue-800 tracking-wide mb-6 shadow-lg shadow-black/10">
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-blue-700">
             <rect x="3" y="7" width="18" height="10" rx="5" />
             <path d="M8 12h.01M12 12h.01M16 12h.01" />
           </svg>
            <span>Halo, selamat datang di IGRS</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
            Tau <span className="text-[#84D890]">RATING</span> dulu <br />
            Baru Seru <span className="text-[#FFB74D]">GAMING</span>
          </h1>

          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="w-full mb-6">
            <div className="relative flex items-center bg-white p-1.5 rounded-full shadow-2xl shadow-black/15 w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari game, game creator, genre..."
                className="w-full pl-4 pr-36 py-3 rounded-full text-gray-700 text-sm focus:outline-none placeholder-gray-400 font-medium"
              />
              <button
                type="submit"
                className="absolute right-1.5 bg-[#FBBF24] hover:bg-[#F59E0B] text-gray-900 drop-shadow-xl font-bold px-6 py-2.5 rounded-full transition-all flex items-center gap-2 text-xs shadow-sm hover:shadow-md cursor-pointer uppercase tracking-wider"
              >
                <span>Cari Game</span>
                <i className="bi bi-rocket-takeoff"></i>
              </button>
            </div>
          </form>

          {/* Popular Keywords */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs text-white font-medium">Sedang Populer:</span>
            <div className="flex flex-wrap gap-2">
              {popularKeywords.map((kw) => (
                <button
                  key={kw}
                  type="button"
                  onClick={() => setSearchQuery(kw)}
                  className="bg-white hover:bg-white/20 text-gray-900 text-[11px] font-medium px-3.5 py-1 rounded-full border border-white/10 transition-all cursor-pointer"
                >
                  {kw}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content (Floating Card Collage) */}
        <div className="relative flex items-center justify-center h-[400px] md:h-[500px]">
          {/* Main Floating Card Collage */}
          <div className="relative w-full max-w-[480px] h-[360px] md:h-[440px]">
            {/* Top Card (Left-rotated) */}
            <div className="absolute left-2 top-2 w-[290px] h-[200px] md:w-[330px] md:h-[230px] rounded-[32px] border-[6px] border-white shadow-[0_24px_60px_rgba(0,0,0,0.35)] overflow-hidden -rotate-3 transform hover:rotate-0 transition-transform duration-500 bg-gray-900 z-0">
              <img 
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80" 
                alt="Fantasy RPG Game artwork" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Card (Right-rotated, overlapping) */}
            <div className="absolute right-1 bottom-2 w-[270px] h-[185px] md:w-[320px] md:h-[220px] rounded-[32px] border-[6px] border-white shadow-[0_24px_60px_rgba(0,0,0,0.35)] overflow-hidden rotate-6 transform hover:rotate-0 transition-transform duration-500 bg-gray-900 z-10">
              <img 
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=80" 
                alt="Action Racing Game artwork" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Small Floating badge 1: Top Right */}
            <div className="absolute top-2 right-10 w-14 h-14 rounded-2xl bg-[#FDBA4D] border-4 border-white shadow-xl flex items-center justify-center animate-bounce z-20">
              <i className="bi bi-controller text-gray-900 text-2xl font-bold"></i>
            </div>

            {/* Small Floating badge 2: Bottom Left */}
            <div className="absolute bottom-2 left-10 w-14 h-14 rounded-full bg-[#FF8A62] border-4 border-white shadow-xl flex items-center justify-center animate-bounce z-20">
              <i className="bi bi-star-fill text-white text-base"></i>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
