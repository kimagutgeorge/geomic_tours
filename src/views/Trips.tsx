import React from "react";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import TripsContent from "../components/TripsContent";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
const Trips = () => {
  return (
    <>
      <Navbar />
      <HomeBanner page_name="Trips" />
      <TripsContent />
      <Footer />
      <BackToTop />
    </>
  );
};
export default Trips;
