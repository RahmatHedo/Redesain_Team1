import HeroSection from '../components/home/HeroSection';
import RatingSection from '../components/home/RatingSection';
import PopularGamesSection from '../components/home/PopularGamesSection';
import ContentSection from '../components/home/ContentSection';
import AnnouncementSection from '../components/home/AnnouncementSection';

function Home() {
  return (
    <div className="bg-[#F9F9FF] min-h-screen">
      <HeroSection />
      <RatingSection />
      <PopularGamesSection />
      <ContentSection />
      <AnnouncementSection />
    </div>
  );
}

export default Home;