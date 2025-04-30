import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import FaqsContent from "../components/content/FaqsContent";
import Spinner from "../components/spiner/spiner";

const Faqs = () => {
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
          <HomeBanner page_name="FAQs" page_title="FAQs" />
          <FaqsContent />
          <Footer />
          <BackToTop />
        </>
      )}
    </>
  );
};
export default Faqs;
