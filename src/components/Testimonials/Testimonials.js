import React from "react";
import TestimonialsCard from "./Card/TestimonialCard";
import person1 from "../../assets/people/person1.jpeg";
import person2 from "../../assets/people/person2.jpeg";
import person3 from "../../assets/people/person3.jpeg";
import person4 from "../../assets/people/person4.jpeg";
import "./Testimonials.css";

function Testimonials() {
  return (
    <div id="testimonials" className="testimonials-bg">
      <div className="container">
        <div className="testimonials">
          <h2>Testimonials</h2>
          <div className="testimonials-grid">
            <TestimonialsCard
              name="Carolina Manuela"
              photo={person1}
              stars="5"
              comment={"The food at Little Lemon is always delicious and fresh"}
            />
            <TestimonialsCard
              name="Diego"
              photo={person2}
              stars="5"
              comment={
                "The aroma of the dishes is enough to make your mouth water."
              }
            />
            <TestimonialsCard
              name="Yara Duarte"
              photo={person3}
              stars="4"
              comment={
                "Little Lemon is as delightful to the eye as it is to the taste buds."
              }
            />
            <TestimonialsCard
              name="Dinis do Guna"
              photo={person4}
              stars="5"
              comment={
                "Never fails to impress with their succulent and savory menu offerings."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
