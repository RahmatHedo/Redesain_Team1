import ContentDescriptionHorizontal from '../shared/ContentDescriptionHorizontal';
import ContentDescriptionVertical from '../shared/ContentDescriptionVertical';
import { CONTENT_DESCRIPTORS } from '../../constants/dummyData';

function ContentSection() {
  return (
    <section className="bg-[#1B4685] py-16 md:py-20 text-white relative overflow-hidden">
      {/* Decorative light elements */}
      <div className="absolute top-[-30%] right-[-10%] w-[50%] h-[60%] rounded-full bg-blue-300/10 blur-3xl"></div>
      <div className="absolute bottom-[-30%] left-[-10%] w-[50%] h-[60%] rounded-full bg-indigo-400/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3.5xl font-extrabold text-white mb-3">
            Pahami Isi Konten dalam Game
          </h2>
          <p className="text-sm text-blue-100/80 font-medium leading-relaxed">
            Setiap game dapat mengandung jenis konten tertentu. Perhatikan simbol berikut sebelum bermain.
          </p>
        </div>

        {/* Layout Grid (4 columns, 3 rows on md and above) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto items-stretch">
          {CONTENT_DESCRIPTORS.map((item) => (
            <div key={item.id} className={`${item.gridClass} w-full h-full flex`}>
              {item.layout === 'horizontal' ? (
                <ContentDescriptionHorizontal data={item} />
              ) : (
                <ContentDescriptionVertical data={item} />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ContentSection;
