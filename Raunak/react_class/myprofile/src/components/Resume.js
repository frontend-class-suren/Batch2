import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import Breadcrumbs from "./Breadcrumbs";
import Skills from "./Skills";
import "./style.css";

const Resume = () => {
  const breadcrumbsPaths = [
    { title: "Home", to: "/" },
    { title: "Resume", to: "/resume" },
  ];

  return (
    <section id="resume" className="container text-center boxes">
      <Breadcrumbs paths={breadcrumbsPaths} />
      <div className="row justify-content-center align-items-center">
        <div className="col-md-8">
          <h2 className="section-title">
            <FontAwesomeIcon icon={faFileDownload} className="mr-2" />
            Resume
          </h2>
          <p className="section-description">
            Download my resume to learn more about my professional experience
            and skills.
          </p>
          <a
            href="/Raunak_Amatya_-_Frontend_Developer.pdf"
            className="resume-download-btn"
            download="Raunak_Amatya_-_Frontend_Developer.pdf"
          >
            DOWNLOAD RESUME
          </a>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default Resume;
