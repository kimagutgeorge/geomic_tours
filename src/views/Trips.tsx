import React from "react";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import TripsContent from "../components/content/TripsContent";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import { useParams } from "react-router-dom";

const Trips = () => {
  const { destination } = useParams();
  return (
    <>
      <Navbar />
      <HomeBanner
        page_name="Trips"
        destination_name={destination}
        page_title="Trips"
      />
      <TripsContent />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Trips;
