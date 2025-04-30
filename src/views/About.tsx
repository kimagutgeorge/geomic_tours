import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import PlanTour from "../components/PlanTour";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Services from "../components/content/Services";
import DestinationCarousel from "../components/DestinationCarousel";
import Spinner from "../components/spiner/spiner";

const About = () => {
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
          <HomeBanner page_name="About us" page_title="About us" />
          <PlanTour />
          <Services />
          <DestinationCarousel />
          <Footer />
          <BackToTop />
        </>
      )}
    </>
  );
};
export default About;
