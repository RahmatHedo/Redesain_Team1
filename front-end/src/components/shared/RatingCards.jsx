function RatingCards({ data }) {
  if (!data) return null;

  return (
    <div className="flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm md:flex-row">
        <div className={`flex flex-col items-center justify-center gap-3 px-8 py-10 text-center md:w-44 ${data.panelClass || "bg-gray-100"}`}>
            
                <img src={data.icon} alt={data.badgeNumber || data.label} className="h-20 w-20 object-contain"/>
            
            <p className="text-base font-semibold  text-white">
                {data.badgeLabel}
            </p>
        </div>
        <div className="flex flex-1 flex-col gap-5 px-6 py-7 md:px-8">
            <div>
                <h3 className="text-2xl font-bold tracking-tight text-gray-700">
                    {data.title}
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-500">
                    {data.description}
                </p>
            </div>
            <div className="grid gap-x-8 gap-y-3 text-sm text-gray-600 sm:grid-cols-2">
                {data.points.map((point) => (
                    <div key={point} className="flex items-start gap-2">
                        <span className="mt-0.5 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full text-green-500">
                            <i className="bi bi-check-circle-fill text-sm"></i>
                        </span>
                        <span>{point}</span>
                    </div>
                ))}
            </div>
            
            
        </div>
    </div>
  )}

export default RatingCards;