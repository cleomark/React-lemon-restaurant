import React from "react";
import CallToAction from "../CallToAction/CallToAction";
import Chicago from "../About/About";
import Reservation from "../Reservation";
import Testimonials from "../Testimonials/Testimonials";

function Booking() {
  return (
    <>
      <CallToAction />
      <Reservation />
      <Testimonials />
      <Chicago />
    </>
  );
}

export default Booking;
