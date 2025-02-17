import React from 'react'; 
import { FontAwesomeIcon } 
	from '@fortawesome/react-fontawesome'; 
import { faCode, faLaptopCode } 
	from '@fortawesome/free-solid-svg-icons'; 
import { faCogs } 
	from '@fortawesome/free-solid-svg-icons'; 
import './style.css'; 

const Skills = () => { 
	return ( 
		<section id="skills"
			className="container boxs"
			style={{ paddingLeft: '0px' }}> 
			<h2 className="section-title"> 
				<FontAwesomeIcon icon={faCogs} 
					className="mr-2" /> 
				SKILLS 
			</h2> 
			<ul className="skills-list"> 	
				<li> 
					<FontAwesomeIcon icon={faCode} 
						className="mr-2" /> 
					HTML 
				</li> 
				<li> 
					<FontAwesomeIcon icon={faCode} 
						className="mr-2" /> 
					CSS 
				</li> 
				<li> 
					<FontAwesomeIcon icon={faCode} 
						className="mr-2" /> 
					JavaScript 
				</li> 
				<li> 
					<FontAwesomeIcon icon={faLaptopCode} 
						className="mr-2" /> 
					React 
				</li> 
				<li> 
					<FontAwesomeIcon icon={faLaptopCode} 
						className="mr-2" /> 
					Bootstrap 
				</li> 
				
				<li> 
					<FontAwesomeIcon icon={faLaptopCode} 
						className="mr-2" /> 
					Node.js 
				</li> 
				
			</ul> 
		</section> 
	); 
}; 

export default Skills;
