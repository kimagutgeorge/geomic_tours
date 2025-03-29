import React from "react";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import PlanTour from "../components/PlanTour";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
interface Props {
  page_name: string;
}
const About = ({ page_name }: Props) => {
  return (
    <>
      <Navbar />
      <HomeBanner />
      <PlanTour />
      <Footer />
      <BackToTop />
    </>
  );
};
export default About;
