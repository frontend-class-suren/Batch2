import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Envelope, Telephone, GeoAlt } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const Contact = () => {
  const breadcrumbsPaths = [
    { title: "Home", to: "/" },
    { title: "Contact", to: "/contact" },
  ];

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
        <Col md={6} className="mb-4 text-black text-start">
          <h4>Get in Touch</h4>
          <p>
            <Envelope className="me-2" /> amatyaraunak56@example.com
          </p>
          <p>
            <Telephone className="me-2" /> +977 9847024524
          </p>
          <p>
            <GeoAlt className="me-2" /> Butwal, Nepal
          </p>
        </Col>

        {/* Contact Form */}
        <Col md={6} className="text-black text-start">
          <h4>Send a Message</h4>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
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
