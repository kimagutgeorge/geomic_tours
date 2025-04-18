import React from "react";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import ContactsContent from "../components/content/ContactsContent";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const Contacts = () => {
  return (
    <>
      <Navbar />
      <HomeBanner page_name="Contact us" page_title="Contact us" />
      <ContactsContent />
      <Footer />
      <BackToTop />
    </>
  );
};
export default Contacts;
