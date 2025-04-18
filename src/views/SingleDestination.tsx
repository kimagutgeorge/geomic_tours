import React from "react";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import SingleDestinationContent from "../components/content/SingleDestinationContent";
import { useParams } from "react-router-dom";

const SingleDestination = () => {
  const { destination } = useParams();
  return (
    <>
      <Navbar />
      <HomeBanner
        page_name="Destinations"
        destination_name={destination}
        page_title="Destinations"
      />
      <SingleDestinationContent />
      <Footer />
      <BackToTop />
    </>
  );
};

export default SingleDestination;
