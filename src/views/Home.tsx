import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categorires";
import Destinations from "../components/Destinations";
import PlanTour from "../components/PlanTour";
import DestinationCarousel from "../components/DestinationCarousel";
import Gallery from "../components/Gallery";
import Stats from "../components/Stats";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import BlogCarousel from "../components/BlogSlider";
function Home() {
  return (
    <>
      <Navbar />;
      <Slider />
      <Categories />
      <Destinations />
      <PlanTour />
      <DestinationCarousel />
      <Gallery />
      <Stats />
      <Testimonial />
      <BlogCarousel />
      <Footer />
      <BackToTop />
    </>
  );
}
export default Home;
