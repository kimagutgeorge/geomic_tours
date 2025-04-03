import React from "react";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import BlogsContent from "../components/BlogsContent";

const Blogs = () => {
  return (
    <>
      <Navbar />
      <HomeBanner page_name="Blogs" page_title="Blogs" />
      <BlogsContent />
    </>
  );
};
export default Blogs;
