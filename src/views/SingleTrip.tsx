import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import SingleTripContent from "../components/content/SingleTripContent";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import { useParams } from "react-router-dom";
import DestinationCarousel from "../components/DestinationCarousel";
import Spinner from "../components/spiner/spiner";

const SingleTrip = () => {
  const { trip } = useParams();
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
            page_name="Trips"
            destination_name={trip}
            page_title="Trips"
          />
          <SingleTripContent />
          <DestinationCarousel />
          <Footer />
          <BackToTop />
        </>
      )}
    </>
  );
};

export default SingleTrip;
