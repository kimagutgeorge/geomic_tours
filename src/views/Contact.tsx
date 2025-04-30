import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import ContactsContent from "../components/content/ContactsContent";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Spinner from "../components/spiner/spiner";

const Contacts = () => {
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
          <HomeBanner page_name="Contact us" page_title="Contact us" />
          <ContactsContent />
          <Footer />
          <BackToTop />
        </>
      )}
    </>
  );
};
export default Contacts;
