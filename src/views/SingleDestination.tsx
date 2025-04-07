import React from "react";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import TripsContent from "../components/TripsContent";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import { useParams } from "react-router-dom";

const SingleDestination = () => {
  const { destination } = useParams();
  return (
    <>
      <Navbar />
      <HomeBanner
        page_name="Trips"
        destination_name={destination}
        page_title="Destinations"
      />
      <TripsContent />
      <Footer />
      <BackToTop />
    </>
  );
};

export default SingleDestination;
