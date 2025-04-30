import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import DestinationList from "../components/DestinationList";
import DestinationCarousel from "../components/DestinationCarousel";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import Spinner from "../components/spiner/spiner";
const DestinationPage = () => {
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
            destination_name=""
            page_title="Destinations"
          />
          <DestinationList />
          <DestinationCarousel />
          <BackToTop />
          <Footer />
        </>
      )}
    </>
  );
};
export default DestinationPage;
