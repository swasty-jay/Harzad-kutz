import React from "react";
import HeroSection from "./Components/Hero";
import Navbar from "./Components/NavBar";
import Vibes from "./Components/Vibes";
import Services from "./Components/Services";
import Gallery from "./Components/Gallary";

const App = () => {
  return (
    <div>
      <>
        <Navbar />
        <HeroSection />
        <Vibes />
        <Services />
        <Gallery />
      </>
    </div>
  );
};

export default App;
