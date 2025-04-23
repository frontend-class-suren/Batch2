// App.js
import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Routes, Route as RouteElement,
	Link
} from 'react-router-dom';
import styled from 'styled-components'

import {
	Navbar, Nav,
	NavDropdown, Carousel
} from 'react-bootstrap';
import DestinationList
	from './components/DestinationList';
import DestinationDetail
	from './components/DestinationDetail';
import ContactForm
	from './components/ContactForm';
// Import the custom CSS file
import './App.css';

const App = () => {
	return (
		<Router>
			<div>
				<Navbar className="custom-navbar" expand="lg">
					<Navbar.Brand className="brand-heading">
						INCREDIBLE INDIA
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Link to="/" className="nav-link">
								Home
							</Link>
							<Link to="/contact"
								className="nav-link">
								Contact
							</Link>
							<NavDropdown title="Explore"
								id="basic-nav-dropdown">
								<Link to="/travel"
									className="dropdown-item">
									Travel
								</Link>
								<Link to="/destinations"
									className="dropdown-item">
									Destinations
								</Link>
								<Link to="/experience"
									className="dropdown-item">
									Experience
								</Link>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Navbar>

				{/* Carousel */}
				<Carousel className="custom-carousel">
					<Carousel.Item>
						<img
							className="d-block w-100 carousel-image"
							src=
"https://media.geeksforgeeks.org/wp-content/uploads/20240105125520/1st.jpg"
							alt="First slide"/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100 carousel-image"
							src=
"https://media.geeksforgeeks.org/wp-content/uploads/20240105125527/2nd.jpg"
							alt="Second slide"/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100 carousel-image"
							src=
"https://media.geeksforgeeks.org/wp-content/uploads/20240105125534/3rd.jpg"
							alt="Third slide"/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100 carousel-image"
							src=
"https://media.geeksforgeeks.org/wp-content/uploads/20240105125539/4th.jpg"
							alt="Fourth slide"/>
					</Carousel.Item>
				</Carousel>
				<br />
				{/* Content of your app (unchanged) */}
				<Routes>
					<RouteElement path="/"
						element={<DestinationList />} />
					<RouteElement path="/destination/:id"
						element={<DestinationDetail />} />
					<RouteElement path="/contact"
						element={<ContactForm />} />
					{/* Add routes for travel, destinations, and experience */}
				</Routes>
				{/* Footer */}
				<div className="custom-footer">
					<div className="footer-section">
						<h3>Connect with us</h3>
						<ul className="social-links">
							<li><a href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer">
								Facebook
							</a>
							</li>
							<li><a href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer">
								Twitter
							</a>
							</li>
							<li><a href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer">
								Instagram
							</a>
							</li>
						</ul>
					</div>
					<div className="footer-section">
						<h3>Contact us</h3>
						<p>Email: contact@incredibleindia.com</p>
						<p>Phone: +91 123 456 7890</p>
					</div>
					<div className="footer-section">
						<h3>Newsletter</h3>
						<p>
							Subscribe to our newsletter
							for updates and offers.
						</p>
						<form>
							<input type="email" placeholder="Your email" />
							<button type="submit">Subscribe</button>
						</form>
					</div>
				</div>
			</div>
		</Router>
	);
}
export default App;
