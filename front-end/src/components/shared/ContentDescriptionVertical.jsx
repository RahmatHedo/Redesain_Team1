

function ContentDescriptionVertical({ data }) {
  if (!data) return null;

  const { name, description, icon, textColor } = data;

  return (
    <div className="flex flex-col items-center text-center p-4 pb-5 rounded-2xl bg-white border border-gray-50 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 w-full h-full min-h-[160px] justify-center">
      
      {/* Icon (No background, smaller size) */}
      <div className="flex items-center justify-center w-12 h-12 mb-2">
        <img 
          src={icon} 
          alt={name} 
          className="w-10 h-10 object-contain hover:scale-108 transition-transform duration-300" 
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-1 mt-1">
        <h4 className={`font-bold text-sm tracking-wide ${textColor || 'text-gray-800'}`}>
          {name}
        </h4>
        <p className="text-[11px] text-gray-500 font-medium leading-relaxed max-w-[180px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ContentDescriptionVertical;