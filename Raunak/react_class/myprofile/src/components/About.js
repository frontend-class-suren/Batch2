import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const About = () => {
  return (
    <section id="about" className="container text-center boxs">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2 className="section-title">
            <FontAwesomeIcon icon={faUser} className="mr-4" />
            WELCOME ♡
          </h2>
          <div className="profile-image-container">
            <img
              src="image.jpeg"
              alt="geek pic"
              className="img-fluid rounded-circle profile-image"
            />
          </div>
          <p className="section-description mt-4">
            Hi! My name is <strong>Raunak Amatya</strong>.I am a skilled Internship Trainee with
            over 6 months of hands-on experience in full-stack web development.
            My expertise spans technologies such as Node.js, React, JavaScript,
            HTML, CSS, and Bootstrap. I have a passion for solving complex
            problems and have successfully designed and developed user-friendly,
            responsive web applications. Additionally, I am experienced in
            working with RESTful APIs, database management (MongoDB, MySQL),
            version control systems (Git/GitHub), and deployment tools. I thrive
            in team-oriented environments, value clean code practices, and
            continuously seek to improve my skills through real-world projects
            and collaboration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
