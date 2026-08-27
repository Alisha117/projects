
import React, { useState } from "react";
import "./Testimonials.css";

import next_icon from "../../assets/next_icon.png";
import prev_icon from "../../assets/prev_icon.png";

import stud1 from "../../assets/stud1.jpg";
import stud2 from "../../assets/stud2.jpg";
import stud3 from "../../assets/stud3.jpg";
import stud4 from "../../assets/stud4.jpg";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 4 cards, 2 cards visible = 2 positions
  const maxSlide = 1;

  const slideForward = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const slideBackward = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="testimonials" id="testimonials">

      <div className="testimonial-heading">
        <p>TESTIMONIALS</p>
        <h1>What Our Students Say</h1>
        <span>
          Hear what our students have to say about their experience.
        </span>
      </div>

      <div className="testimonial-wrapper">

        {/* PREVIOUS BUTTON */}
        <button
          className="testimonial-btn prev-btn"
          onClick={slideBackward}
          disabled={currentSlide === 0}
          aria-label="Previous testimonials"
        >
          <img src={prev_icon} alt="Previous" />
        </button>

        {/* SLIDER */}
        <div className="testimonial-slider">

          <ul
            className="testimonial-track"
            style={{
              transform: `translateX(-${currentSlide * 50}%)`,
            }}
          >

            {/* CARD 1 */}
            <li className="testimonial-card">
              <div className="card-inner">

                <div className="user-info">
                  <img src={stud1} alt="William Jackson" />

                  <div>
                    <h3>William Jackson</h3>
                    <span>Educity, USA</span>
                  </div>
                </div>

                <div className="quote">
                  “
                </div>

                <p>
                  Choosing to pursue my degree at Educity was one of the
                  best decisions I have ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>

                <div className="stars">
                  ★★★★★
                </div>

              </div>
            </li>

            {/* CARD 2 */}
            <li className="testimonial-card">
              <div className="card-inner">

                <div className="user-info">
                  <img src={stud2} alt="Sarah Williams" />

                  <div>
                    <h3>Sarah Williams</h3>
                    <span>Educity, USA</span>
                  </div>
                </div>

                <div className="quote">
                  “
                </div>

                <p>
                  My experience at Educity has been amazing. The professors
                  are supportive, the facilities are excellent, and I have
                  learned so much throughout my degree.
                </p>

                <div className="stars">
                  ★★★★★
                </div>

              </div>
            </li>

            {/* CARD 3 */}
            <li className="testimonial-card">
              <div className="card-inner">

                <div className="user-info">
                  <img src={stud3} alt="James Anderson" />

                  <div>
                    <h3>James Anderson</h3>
                    <span>Educity, USA</span>
                  </div>
                </div>

                <div className="quote">
                  “
                </div>

                <p>
                  Educity provided me with an excellent learning environment.
                  The combination of practical knowledge and academic guidance
                  helped me build confidence for my career.
                </p>

                <div className="stars">
                  ★★★★★
                </div>

              </div>
            </li>

            {/* CARD 4 */}
            <li className="testimonial-card">
              <div className="card-inner">

                <div className="user-info">
                  <img src={stud4} alt="Emily Johnson" />

                  <div>
                    <h3>Emily Johnson</h3>
                    <span>Educity, USA</span>
                  </div>
                </div>

                <div className="quote">
                  “
                </div>

                <p>
                  I am extremely happy with my decision to study at Educity.
                  The supportive environment and quality education have
                  exceeded my expectations.
                </p>

                <div className="stars">
                  ★★★★★
                </div>

              </div>
            </li>

          </ul>
        </div>

        {/* NEXT BUTTON */}
        <button
          className="testimonial-btn next-btn"
          onClick={slideForward}
          disabled={currentSlide === maxSlide}
          aria-label="Next testimonials"
        >
          <img src={next_icon} alt="Next" />
        </button>

      </div>

      {/* DOTS */}
      <div className="testimonial-dots">
        <span
          className={currentSlide === 0 ? "active" : ""}
          onClick={() => setCurrentSlide(0)}
        ></span>

        <span
          className={currentSlide === 1 ? "active" : ""}
          onClick={() => setCurrentSlide(1)}
        ></span>
      </div>

    </section>
  );
};

export default Testimonials;

