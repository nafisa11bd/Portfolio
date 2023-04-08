import React from "react";
import "./about.css";
import ABM from "../../assets/shamaabout.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ABM} alt="shama" />
          </div>
        </div>
        <div className="about__content">
          <p>
            I have graduated from Rajshahi University of Engineering &
            Technology. My major was Computer Science & Engineering.I have
            completed HSC from Rajshahi college and SSC from Rajshahi Govt. P.N
            Girls' High School. I have a knack for developing practical
            softwares since I have an original, creative way of thinking. I have
            experience with a wide range of programming languages and
            applications, so I stay up to date on the most recent advancements
            in the software development industry. I take great satisfaction in
            maximizing functionality that are clear, simple to use, flexible,
            and efficient. I am currently seeking a perfect job as a web
            developer from which I can gain fantastic experience and also prove
            my worth.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
