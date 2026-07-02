// components/GameAboutCard.jsx

function GameAboutCard({ game }) {
  if (!game) return null;

  const getPlatformIcon = (platform) => {
    const normalizedPlatform = platform.toLowerCase();

    if (normalizedPlatform.includes("android") || normalizedPlatform.includes("ios") || normalizedPlatform.includes("mobile")) {
      return "bi-phone-landscape";
    }

    if (normalizedPlatform.includes("pc") || normalizedPlatform.includes("playstation") || normalizedPlatform.includes("laptop")) {
      return "bi-laptop";
    }

    return "bi-device-unknown";
  };

  return (
    <article className="relative w-[250px] overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-lg">

      <div className="relative">
        <img src={game.thumbnail} alt={game.title} className="h-48 w-full object-cover"/>

        <div className="absolute top-2 right-2">
          <span className={`rounded px-2 py-0.5 text-xs font-bold ${game.ageBadgeClass || "bg-red-500 text-white"}`}>
            {game.rating_age}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2 p-4">
        
            <h3 className="text-sm font-bold text-gray-800">
            {game.title}
            </h3>
            
            <p className="text-xs text-gray-500 line-clamp-2">
            {game.description}
            </p>

            <div className="flex items-center gap-2 text-gray-500">
              {game.platforms.map((platform) => (
                <span
                  key={platform}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-sm"
                  title={platform}
                  aria-label={platform}
                >
                  <i className={`bi ${getPlatformIcon(platform)}`}></i>
                </span>
              ))}
            </div>



            <button className="border-t border-gray-100 px-4 py-3 text-xs font-medium text-blue-700 transition-colors hover:text-blue-800">
            <a href={game.detail_url} target="_blank" rel="noopener noreferrer">
              Lihat Detail
            </a>
            </button>
      </div>
    </article>
  );
}

export default GameAboutCard;