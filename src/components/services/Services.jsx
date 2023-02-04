import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Competitor analysis.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Interactive prototypes and testing designs.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Product structure and stratagy.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Coordination with UI disiners.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Designing user interfaces and navigation menus.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Writing and reviewing code for sites, typically HTML or
                JavaScript.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Collaborating with designers, developers, and stakeholders.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integrating multimedia content onto a site.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Testing web applications.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Troubleshooting problems with performance or user experience.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Writing, editing, blogging, and updating content for everything
                from brochures.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Marketing and promotion materials to emails, websites, blogs and
                more...
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
