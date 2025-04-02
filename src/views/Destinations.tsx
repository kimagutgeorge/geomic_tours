import React from "react";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import DestinationList from "../components/DestinationList";
import DestinationCarousel from "../components/DestinationCarousel";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
const DestinationPage = () => {
  return (
    <>
      <Navbar />
      <HomeBanner page_name="Destinations" page_title="Destinations" />
      <DestinationList />
      <DestinationCarousel />
      <BackToTop />
      <Footer />
    </>
  );
};
export default DestinationPage;
