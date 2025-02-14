import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } 
	from '@fortawesome/react-fontawesome'; 
import { faHome, faProjectDiagram, faAddressBook, faFileAlt } 
	from '@fortawesome/free-solid-svg-icons'; 

const Breadcrumbs = ({ paths }) => { 
	return ( 
		<nav aria-label="breadcrumb"> 
			<ol className="breadcrumb bg-light p-3 rounded"> 
				<li className="breadcrumb-item"> 
					<Link to="/"> 
						<FontAwesomeIcon icon={faHome} 
							className="mr-2" /> 
						Home
					</Link> 
				</li>
				<li className="breadcrumb-item"> 
					<Link to="/projects"> 
						<FontAwesomeIcon icon={faProjectDiagram} 
							className="mr-2" /> 
						Projects
					</Link> 
				</li>
				<li className="breadcrumb-item"> 
					<Link to="/contact"> 
						<FontAwesomeIcon icon={faAddressBook} 
							className="mr-2" /> 
						Contact
					</Link> 
				</li>
				<li className="breadcrumb-item"> 
					<Link to="/resume"> 
						<FontAwesomeIcon icon={faFileAlt} 
							className="mr-2" /> 
						Resume
					</Link> 
				</li>
				{paths.map((path, index) => ( 
					<li key={index} 
						className={ 
							`breadcrumb-item${index === paths.length - 1 ? 
							' active' : ''}` 
						}> 
						{index !== paths.length - 1 ? ( 
							<Link to={path.to}> 
								{path.title} 
							</Link> 
						) : ( 
							<span>{path.title}</span> 
						)} 
					</li> 
				))} 
			</ol> 
		</nav> 
	); 
}; 

export default Breadcrumbs;
