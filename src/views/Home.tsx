import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categorires";
import Destinations from "../components/Destinations";
function Home() {
  return (
    <>
      <Navbar />;
      <Slider />
      <Categories />
      <Destinations />
    </>
  );
}
export default Home;
