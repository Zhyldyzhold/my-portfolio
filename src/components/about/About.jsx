import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { FaAward, FaUsers, FaFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>2+ Worldwide</small>
            </article>
            <article className="about__card">
              <FaFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
          </div>
          <p>
            Here are a few words about myself. My name is Zhyldyz. I am a
            frontend developer. I am from wonderful country Kyrgyzstan. You can
            scroll through my portfolio page for detailed information. I am
            interested in alpinism and I was in several peaks. Also, I play,
            draw with my nephews.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
