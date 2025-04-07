import React from "react";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import SingleTripContent from "../components/SingleTripContent";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import { useParams } from "react-router-dom";

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
      <Footer />
      <BackToTop />
    </>
  );
};

export default SingleTrip;
