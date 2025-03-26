import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categorires";
import Destinations from "../components/Destinations";
import PlanTour from "../components/PlanTour";
import DestinationCarousel from "../components/DestinationCarousel";
function Home() {
  return (
    <>
      <Navbar />;
      <Slider />
      <Categories />
      <Destinations />
      <PlanTour />
      <DestinationCarousel />
    </>
  );
}
export default Home;
