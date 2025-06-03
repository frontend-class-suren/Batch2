import React from 'react';
import { FontAwesomeIcon } 
	from '@fortawesome/react-fontawesome'; 
import { faCode, faLaptopCode } 
	from '@fortawesome/free-solid-svg-icons'; 
import { faCogs } 
	from '@fortawesome/free-solid-svg-icons'; 
import './Projects.css';

const Skills = () => {
  return (
<section id="skills"
			className="container"
			style={{ paddingLeft: '0px' }}> 
			<h2 className="skils-title"> 
				<FontAwesomeIcon icon={faCogs} 
					className="mr-2" /> 
				Skills 
			</h2> 
			<ul className="skills-list"> 
				<li><a href="https://www.w3schools.com/html/default.asp">
					<FontAwesomeIcon icon={faCode} 
						className="mr-2" /> 
					HTML <br />
					<img width={70} height={70} src="https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png?f=webp&w=256" alt="" />
					</a>
					
				</li> 
				<li><a href="https://www.w3schools.com/css/default.asp"> 
					<FontAwesomeIcon icon={faCode} 
						className="mr-2" /> 
					CSS <br />
					<img width={70} height={70} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxof3MaQZINC-OwprgxScacdvPCpxKnkGHQ&s" alt="" />
					 </a>
				</li> 
				<li> <a href="https://www.w3schools.com/js/default.asp">
					<FontAwesomeIcon icon={faCode} 
						className="mr-2" /> 
					JavaScript <br />
					<img width={70} height={70} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYLLqiTiFvI6IHt5F3WY4Stw5fw__PoWgirw&s" alt="" />
					 </a>
				</li> 
				<li> <a href="https://www.w3schools.com/react/default.asp">
					<FontAwesomeIcon icon={faLaptopCode} 
						className="mr-2" /> 
					React <br />
					<img width={80} height={80} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLPLQGezkpT1ntM2T0k3TR0yY75wevMpjLKA&s" alt="" />
					 </a>
				</li> 
				<li> <a href="https://www.w3schools.com/bootstrap5/index.php">
					<FontAwesomeIcon icon={faLaptopCode} 
						className="mr-2" /> 
					Bootstrap <br />
					<img width={80} height={80} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWW8Y5asB-2AjIlgRgbmSpRkVhsb4im6oCqA&s" alt="" />
					 </a>
				</li>  
				<li> <a href="https://www.w3schools.com/java/default.asp">
					<FontAwesomeIcon icon={faLaptopCode} 
						className="mr-2" /> 
					Java <br />
					<img width={80} height={80} src="https://cdn.iconscout.com/icon/free/png-256/free-java-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-4-pack-logos-icons-2945017.png?f=webp&w=256" alt="" />
					 </a>
				</li> 
				{/* Add more skills as needed */} 
			</ul> 
		</section> 
  )
}

export default Skills