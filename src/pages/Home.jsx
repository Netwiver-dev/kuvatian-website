import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/Home/HeroSection";
import MissionStatement from "../components/Home/MissionStatement";
import KeyPrograms from "../components/Home/KeyPrograms";
import OurImpact from "../components/Home/OurImpact";
import Testimonials from "../components/Home/Testimonials";
import GetInvolved from "../components/Home/GetInvolved";
import News from "../components/Home/News";
import ContactUs from "../components/Home/ContactUs";
import Gallery from "../components/Home/Gallery";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <MissionStatement />
      <KeyPrograms />
      <OurImpact />
      <Testimonials />
      <GetInvolved />
      <News />
      <ContactUs />
      <Gallery />
      <Footer />
    </>
  );
}

export default Home;
