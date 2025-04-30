import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import TripsContent from "../components/content/TripsContent";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import { useParams } from "react-router-dom";
import Spinner from "../components/spiner/spiner";

const Trips = () => {
  const { destination } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
            destination_name={destination}
            page_title="Trips"
          />
          <TripsContent />
          <Footer />
          <BackToTop />
        </>
      )}
    </>
  );
};

export default Trips;
