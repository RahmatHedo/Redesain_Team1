import HeroSection from "../components/home/HeroSection";
import AnnouncementCard from "../components/shared/AnnouncementCard";
import ContentDescriptionHorizontal from "../components/shared/ContentDescriptionHorizontal";
import ContentDescriptionVertical from "../components/shared/ContentDescriptionVertical";
import GameAboutCard from "../components/shared/GameAboutCard";
import GameCard from "../components/shared/GameCard";
import RatingAge from "../components/shared/RatingAge";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <HeroSection/>

      <GameAboutCard/>
    </div>
  );
}

export default Home;