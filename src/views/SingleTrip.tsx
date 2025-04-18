import React from "react";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import SingleTripContent from "../components/content/SingleTripContent";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import { useParams } from "react-router-dom";
import DestinationCarousel from "../components/DestinationCarousel";

const SingleTrip = () => {
  const { trip } = useParams();
  return (
    <>
      <Navbar />
      <HomeBanner
        page_name="Trips"
        destination_name={trip}
        page_title="Trips"
      />
      <SingleTripContent />
      <DestinationCarousel />
      <Footer />
      <BackToTop />
    </>
  );
};

export default SingleTrip;
