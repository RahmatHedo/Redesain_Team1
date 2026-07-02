import RatingAge from "../components/shared/RatingAge";
import GameDescriptor from "../components/shared/GameDescriptor";

// Dummy data — struktur menyerupai response backend, tinggal diganti hasil fetch API nantinya
const game = {
  id: 1,
  title: "Mobile Legends: Bang Bang",
  thumbnail: "/images/mlbb-banner.jpg",
  icon: "/images/mlbb-icon.jpg",
  category: "MOBA",
  release_year: 2016,
  rating_age: 18,
  rating_label: "TEEN RATING",
  rating_explanation:
    "Teen classification due to moderate fantasy violence and interactive online components.",
  genres: ["Action", "MOBA", "Strategy"],
  platforms: ["Android", "iOS"],
  publisher: "Moonton Games",
  developer: "Moonton",
  short_description:
    "Join your friends in a brand new 5v5 MOBA showdown against real human opponents, Mobile Legends: Bang Bang!",
  description:
    "Mobile Legends: Bang Bang is one of the most popular mobile Multiplayer Online Battle Arena (MOBA) games worldwide that brings communities together through teamwork and strategy. With over 1.5 billion installations and 110 million active monthly users, the award-winning game is among the top 10 most played in over 80 countries. With an extensive reach across the Asia Pacific region, the multiplayer is available in 139 countries with an expansive global esports presence.",
  screenshots: [
    "/images/mlbb-ss-1.jpg",
    "/images/mlbb-ss-2.jpg",
    "/images/mlbb-ss-3.jpg",
    "/images/mlbb-ss-4.jpg",
    "/images/mlbb-ss-5.jpg",
    "/images/mlbb-ss-6.jpg",
  ],
  content_descriptors: [
    {
      id: "violence",
      title: "Violence",
      description:
        "Contains animated combat with fantasy-style effects and combat-oriented gameplay.",
      color: "red",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <circle cx="12" cy="12" r="9" />
          <path d="m9 9 6 6M15 9l-6 6" />
        </svg>
      ),
    },
    {
      id: "online-interaction",
      title: "Online Interaction",
      description:
        "Features real-time voice and text chat between players during matches.",
      color: "blue",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      id: "character-visuals",
      title: "Character Visuals",
      description:
        "Hero skins and designs emphasize heroic and stylized fantasy archetypes.",
      color: "green",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
        </svg>
      ),
    },
  ],
};

function HeroSection({ game }) {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${game.thumbnail})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-blue-900/40" />

      <div className="relative max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {game.category}
            </span>
            <span className="bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full">
              Release: {game.release_year}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            {game.title}
          </h1>

          <p className="text-white/80 text-sm md:text-base mb-5">
            {game.short_description}
          </p>

          <div className="flex items-center gap-4">
            {game.platforms.map((platform) => (
              <span
                key={platform}
                className="flex items-center gap-1.5 text-white/70 text-sm"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <rect x="6" y="2" width="12" height="20" rx="2" />
                  <path d="M11 18h2" />
                </svg>
                {platform}
              </span>
            ))}
          </div>
        </div>

        <RatingAge
          // age={`${game.rating_age}+`}
          // label={game.rating_label}
          // sublabel="Verified by IGRS"
          // size="md"
        />
      </div>
    </section>
  );
}

function AboutSection({ game }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 mb-5">
        <span className="w-1 h-6 bg-blue-700 inline-block rounded" />
        About the Game
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white border border-gray-100 rounded-lg p-6">
          <p className="text-sm text-gray-600 leading-relaxed">
            {game.description}
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-lg p-6 space-y-4">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
              Publisher
            </p>
            <p className="text-sm font-medium text-gray-800">
              {game.publisher}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
              Developer
            </p>
            <p className="text-sm font-medium text-gray-800">
              {game.developer}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
              Genres
            </p>
            <p className="text-sm font-medium text-gray-800">
              {game.genres.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DescriptorSection({ game }) {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-12">
      <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 mb-5">
        <span className="w-1 h-6 bg-blue-700 inline-block rounded" />
        Content Descriptors
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {game.content_descriptors.map((descriptor) => (
            <GameDescriptor
              key={descriptor.id}
              icon={descriptor.icon}
              title={descriptor.title}
              description={descriptor.description}
              color={descriptor.color}
            />
          ))}
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 flex flex-col items-center text-center gap-4">
          <RatingAge
            // age={`${game.rating_age}+`}
            // label={game.rating_label}
            // size="md"
          />
          <p className="text-xs text-gray-500 leading-relaxed">
            {game.rating_explanation}
          </p>
          <button className="w-full text-sm font-semibold text-blue-700 border border-blue-700 rounded-md px-4 py-2.5 hover:bg-blue-50 transition">
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </section>
  );
}

function ScreenshotGallery({ game }) {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-16">
      <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 mb-5">
        <span className="w-1 h-6 bg-blue-700 inline-block rounded" />
        Screenshot Gallery
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {game.screenshots.map((src, index) => (
          <div
            key={index}
            className="aspect-video bg-gray-900 rounded-md overflow-hidden"
          >
            <img
              src={src}
              alt={`${game.title} screenshot ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function GameDetail() {
  return (
    <main className="bg-gray-50">
      <HeroSection game={game} />
      <AboutSection game={game} />
      <DescriptorSection game={game} />
      <ScreenshotGallery game={game} />
    </main>
  );
}

export default GameDetail;