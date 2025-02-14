import React from 'react'; 
import { FontAwesomeIcon } 
	from '@fortawesome/react-fontawesome'; 
import { faEnvelope, faPhone } 
	from '@fortawesome/free-solid-svg-icons'; 
import { faLinkedin, faGithub } 
	from '@fortawesome/free-brands-svg-icons'; 
import Breadcrumbs from './Breadcrumbs'; 
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Envelope, Telephone, GeoAlt } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css'; 

const Contact = () => { 
	const breadcrumbsPaths = 
		[ 
			{ title: 'Home', to: '/' }, 
			{ title: 'Contact', to: '/contact' } 
		]; 
        
	// 
	return (
		
		<Container className="py-5 boxs">
		  <h2 className="text-center mb-4 text-black">Contact Me</h2>
		  <Row>
			{/* Contact Information */}
			<Col md={6} className="mb-4 text-black">
			  <h4>Get in Touch</h4>
			  <p><Envelope className="me-2" /> amatyaraunak56@example.com</p>
			  <p><Telephone className="me-2" /> +977 9847024524</p>
			  <p><GeoAlt className="me-2" /> Butwal, Nepal</p>
			</Col>
	
			{/* Contact Form */}
			<Col md={6} className="text-black">
			  <h4>Send a Message</h4>
			  <Form>
				<Form.Group className="mb-3 text-black">
				  <Form.Label>Name</Form.Label>
				  <Form.Control type="text" placeholder="Enter your name" required />
				</Form.Group>
				<Form.Group className="mb-3 text-black">
				  <Form.Label>Email</Form.Label>
				  <Form.Control type="email" placeholder="Enter your email" required />
				</Form.Group>
				<Form.Group className="mb-3 text-black">
				  <Form.Label>Message</Form.Label>
				  <Form.Control as="textarea" rows={4} placeholder="Your message" required />
				</Form.Group>
				<Button variant="primary" type="submit">Send Message</Button>
			  </Form>
			</Col>
		  </Row>
		</Container>
	  );
}; 

export default Contact;
