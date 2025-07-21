import HeroSection from "../Components/Hero";
import Vibes from "../Components/Vibes";
import Services from "../Components/Services";
import Gallery from "../Components/Gallary";

const Home = () => {
  return (
    <div className="relative min-h-screen ">
      <HeroSection />
      <Vibes />
      <Services />
      <Gallery />
    </div>
  );
};

export default Home;
