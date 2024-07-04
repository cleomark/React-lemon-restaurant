import React from "react";
import CallToAction from "../CallToAction/CallToAction";
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
