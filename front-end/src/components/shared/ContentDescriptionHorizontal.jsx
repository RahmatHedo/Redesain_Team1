

function ContentDescriptionHorizontal({ data }) {
  if (!data) return null;

  const { name, description, icon, textColor } = data;

  return (
    <div className="flex flex-row w-full items-center gap-4 p-4 rounded-2xl bg-white shadow-xs border border-gray-50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full">
      
      {/* Icon (No background, smaller size) */}
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
        <img 
          src={icon} 
          alt={name} 
          className="w-10 h-10 object-contain" 
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-0.5">
        <h4 className={`font-bold text-sm tracking-wide ${textColor || 'text-gray-800'}`}>
          {name}
        </h4>
        <p className="text-[11px] text-gray-500 font-medium leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ContentDescriptionHorizontal;