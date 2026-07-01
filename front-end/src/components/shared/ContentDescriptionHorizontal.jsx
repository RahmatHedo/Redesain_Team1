// components/ContentDescriptionHorizontal.jsx
function ContentDescriptionHorizontal() {
  return (
    <div className="flex flex-row w-fit items-start gap-3 p-3 rounded-lg bg-bgiconpurple last:border-b-0">
      <div className="flex items-center gap-2">
        <img src="" alt="" className="w-6 h-6 mt-0.5" />
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="font-semibold text-gray-800 text-sm">Content Description</h4>
        <p className="text-xs text-gray-600">This is a simple content description component.</p>
      </div>
    </div>
  );
}

export default ContentDescriptionHorizontal;