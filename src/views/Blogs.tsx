import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import BlogsContent from "../components/content/BlogsContent";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Spinner from "../components/spiner/spiner";

const Blogs = () => {
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
          <HomeBanner page_name="Blogs" page_title="Blogs" />
          <BlogsContent />
          <Footer />
          <BackToTop />
        </>
      )}
    </>
  );
};
export default Blogs;
