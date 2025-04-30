import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import SingleBlogContent from "../components/content/SingleBlogContent";
import Spinner from "../components/spiner/spiner";

const SingleBlog = () => {
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
          <SingleBlogContent />
          <Footer />
          <BackToTop />
        </>
      )}
    </>
  );
};
export default SingleBlog;
