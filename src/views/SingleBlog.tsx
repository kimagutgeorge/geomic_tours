import React from "react";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import SingleBlogContent from "../components/content/SingleBlogContent";

const SingleBlog = () => {
  return (
    <>
      <Navbar />
      <HomeBanner page_name="Blogs" page_title="Blogs" />
      <SingleBlogContent />
      <Footer />
      <BackToTop />
    </>
  );
};
export default SingleBlog;
