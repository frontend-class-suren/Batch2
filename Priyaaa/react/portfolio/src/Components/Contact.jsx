import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope  } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { Envelope, Telephone, GeoAlt } from "react-bootstrap-icon";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";

const Contact = () => {
  
  return (
    <Container className="py-5 boxs text-center">
      <div className="d-flex align-items-center justify-content-center mb-4">
        <h2 className="section-title ">
          <FontAwesomeIcon icon={faEnvelope} className="me-2" />
          CONTACT
        </h2>
      </div>

      <Row>
        {/* Contact Information */}
        <Col md={6} className="mb-4 text-white text-start">
          <h4>Get in Touch</h4>
          <p><a href="https://mail.google.com"><faEnvelope className="me-2" /> sarupriya@gmail.com</a></p>
          <p><a href="https://maps.app.goo.gl/xQdxgduk3tJohd49A">< fa-location-dot className="me-2" />Drivertole,Rupandehi</a>
          </p>
        </Col>

        {/* Contact Form */}
        <Col md={6} className="form text-white text-start">
          <h4>Send a Message</h4>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="name">Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="email">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="message">Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Your message"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
