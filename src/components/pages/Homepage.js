import React from "react";
import CallToAction from "../Hero/Hero";
import About from "../About/About";
import Specials from "../Specials/Specials";
import Testimonials from "../Testimonials/Testimonials";

function Homepage() {
  return (
    <>
      <CallToAction />
      <Specials />
      <Testimonials />
      <About />
    </>
  );
}

export default Homepage;
