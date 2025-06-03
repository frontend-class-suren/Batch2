import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
// import Skills from "./Skills";
import "./Projects.css";


const Resume = () => {
  return (
    <section id="resume" className="container text-center boxes">
      {/* <Breadcrumbs paths={breadcrumbsPaths} /> */}
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
            href="/Priya_Saru_-_Frontend_Developer.pdf"
            className="resume-download-btn"
            download="Priya_Saru-_Frontend_Developer.pdf"
          >
            Download resume
          </a>
          {/* <Skills /> */}
        </div>
      </div>
    </section>
  )
}

export default Resume