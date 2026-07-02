import AnnouncementCard from '../shared/AnnouncementCard';
import { BLOG_ANNOUNCEMENTS } from '../../constants/dummyData';

function AnnouncementSection() {
  return (
    <section className="py-16 md:py-20 bg-[#F9F9FF]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3.5xl font-extrabold text-[#1B4685] mb-3">
            Pengumuman Terbaru
          </h2>
          <p className="text-sm text-gray-500 font-medium leading-relaxed">
            Informasi & berita seputar industri game di Indonesia.
          </p>
        </div>

        {/* Announcements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-stretch">
          {BLOG_ANNOUNCEMENTS.map((announcement) => (
            <div key={announcement.id} className="flex justify-center h-full">
              <AnnouncementCard data={announcement} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AnnouncementSection;
