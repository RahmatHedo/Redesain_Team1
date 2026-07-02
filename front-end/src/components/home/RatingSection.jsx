import RatingAge from '../shared/RatingAge';
import { RATINGS_AGE_SUMMARY } from '../../constants/dummyData';

function RatingSection() {
  return (
    <section className="py-16 md:py-20 bg-[#F9F9FF]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3.5xl font-extrabold text-[#1B4685] mb-3">
            Pilih Berdasarkan Rating Usia
          </h2>
          <p className="text-sm text-gray-500 font-medium leading-relaxed">
            Tentukan game yang sesuai dengan umur pemain demi kenyamanan dan keamanan bermain.
          </p>
        </div>

        {/* Ratings Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 justify-center items-stretch max-w-5xl mx-auto">
          {RATINGS_AGE_SUMMARY.map((rating, index) => (
            <div key={rating.rating_age || index} className="flex justify-center">
              <RatingAge data={rating} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default RatingSection;
