import React from "react";
import HeroPage from "./pages/Hero";
import AboutUs from "./pages/AboutUs";
import GamesPage from "./pages/Games";
import Possibilities from "./pages/Possibilities";
import StatsPage from "./pages/Stats";
import CeoAboutPage from "./pages/CEOAbout";
import Partners from "./pages/Partners";
import JoinPage from "./pages/Join";
import Footer from "./pages/Footer";

function App() {
 return (
  <div>
   <HeroPage />
   <AboutUs />
   <GamesPage />
   <Possibilities />
   <CeoAboutPage />
   <StatsPage />
   <Partners />
   <JoinPage />
   <Footer />
  </div>
 );
}

export default App;
