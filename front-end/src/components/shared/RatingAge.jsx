// components/RatingAge.jsx
// import RATINGS from "../../constant";

function RatingAge() {
  return (
    <div className="inline-flex flex-col items-center gap-4 bg-gray-100 px-4 py-2 rounded-lg">

      <div className="flex-1 items-center gap-2">
        <i class="bi bi-controller "></i>
        <span className="text-sm bg-bgiconblue px-3 py-1 rounded-full font-medium text-gray-700">1000 Game</span>
      </div>

      <div className="flex-1 items-center gap-1">
        <img src="" alt="" className="w-8 h-6 object-contain"/>
      </div>

      <div className="flex-1 items-center gap-1">
        <span className="text-sm font-medium text-gray-700">Anak Anak</span>
      </div>
    </div>
  );
}

export default RatingAge;