const colorMap = {
  red: { border: "border-red-400", ring: "border-red-400 text-red-500" },
  blue: { border: "border-blue-400", ring: "border-blue-400 text-blue-500" },
  green: { border: "border-green-400", ring: "border-green-400 text-green-500" },
};

export default function GameDescriptor({
  icon,
  title,
  description,
  color = "blue",
}) {
  const c = colorMap[color] ?? colorMap.blue;

  return (
    <div
      className={`bg-white border-l-4 ${c.border} border-t border-r border-b border-gray-100 rounded-md p-5`}
    >
      <div
        className={`w-11 h-11 rounded-full border-2 ${c.ring} flex items-center justify-center mb-4`}
      >
        {icon}
      </div>
      <h3 className="font-bold text-gray-900 text-base mb-1">{title}</h3>
      <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}