import { faCode, faEnvelope, faFileAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav, Navbar  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';
import './Header.css';

const Header = () => {
  return (
    <>
    <Navbar bg="dark" expand="lg" className="custom-navbar shadow-sm">
        <Navbar.Brand as={Link} to="/" className='brand-name'>
        <span className='display-4 text-white ho'>Simran Shrestha</span>
        </Navbar.Brand>
        <button className='navbar-toggler'
                type='button' data-toggle="collapse"
                data-target="#navbarNav" aria-controls='navbarNav'
                aria-expanded="false" aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>        
        </button>
        <div className="collapse navbar-collapse text-white" id='navbarNav'>
            <Nav className='ml-auto'>
                <Nav.Link as={Link} to='/'><span>About</span>
                <FontAwesomeIcon icon={faInfoCircle} className="ml-2 text-light ho ho"/></Nav.Link>
                <Nav.Link as={Link} to="/projects"><span>Projects</span>
                <FontAwesomeIcon icon={faCode} className="ml-2 text-light ho"/></Nav.Link>
                <Nav.Link as={Link} to="/resume"><span>Resume</span>
                <FontAwesomeIcon icon={faFileAlt} className="ml-2 text-light ho"/></Nav.Link>
                <Nav.Link as={Link} to="/contact"><span>Contact</span>
                <FontAwesomeIcon icon={faEnvelope} className="ml-2 text-light ho"/></Nav.Link>
            </Nav>
            <Nav className='ml-auto'>
            </Nav>
        </div>
    </Navbar>
    </>
  )
}

export default Header