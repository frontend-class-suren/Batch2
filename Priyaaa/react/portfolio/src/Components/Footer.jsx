import React from 'react'
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
<footer className="footer"> 
	<div className="container"> 
		<div className="row"> 
		<div className="col-md-6"> 
			<p>© 2025 Geek. All rights reserved.</p> 
		</div> 
		<div className="col-md-6 text-md-right"> 
			<ul className="social-icons list-unstyled"> 
				<li>
			<a href= "https://github.com/yourusername" target="_blank" rel="noopener noreferrer"> 
				<FontAwesomeIcon icon={faGithub} /> </a> 
			</li>
			 <li><a href="https://www.facebook.com/" target='_blank' rel='noopener noreferrer'>
			 <FontAwesomeIcon width={100} icon={faFacebook}/></a></li>
			 <li><a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
			 <FontAwesomeIcon icon={faWhatsapp}/></a></li>
			 <li><a href="https://www.instagram.com/" target='_blank' rel='noopener noreferrer'>
			 <FontAwesomeIcon icon={faInstagram}/></a></li>
			</ul> 
		</div> 
		</div> 
	</div> 
	</footer>  )
}

export default Footer