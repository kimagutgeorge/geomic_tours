import React from "react";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import FaqsContent from "../components/content/FaqsContent";

const Faqs = () => {
  return (
    <>
      <Navbar />
      <HomeBanner page_name="FAQs" page_title="FAQs" />
      <FaqsContent/>
      <Footer />
      <BackToTop />
    </>
  );
};
export default Faqs;
