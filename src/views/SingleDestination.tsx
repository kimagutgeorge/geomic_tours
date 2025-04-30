import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import SingleDestinationContent from "../components/content/SingleDestinationContent";
import { useParams } from "react-router-dom";
import Spinner from "../components/spiner/spiner";

const SingleDestination = () => {
  const { destination } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
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
      )}
    </>
  );
};

export default SingleDestination;
