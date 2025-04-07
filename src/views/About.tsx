import React from "react";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import PlanTour from "../components/PlanTour";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Services from "../components/Services";
import DestinationCarousel from "../components/DestinationCarousel";

const About = () => {
  return (
    <>
      <Navbar />
      <HomeBanner page_name="About us" page_title="About us" />
      <PlanTour />
      <Services />
      <DestinationCarousel />
      <Footer />
      <BackToTop />
    </>
  );
};
export default About;
