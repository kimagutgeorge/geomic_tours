import React from "react";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import BlogsContent from "../components/BlogsContent";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const Blogs = () => {
  return (
    <>
      <Navbar />
      <HomeBanner page_name="Blogs" page_title="Blogs" />
      <BlogsContent />
      <Footer />
      <BackToTop />
    </>
  );
};
export default Blogs;
