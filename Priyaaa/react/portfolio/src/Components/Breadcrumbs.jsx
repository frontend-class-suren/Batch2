// Breadcrumbs.js 
import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } 
	from '@fortawesome/react-fontawesome'; 
import { faHome } 
	from '@fortawesome/free-solid-svg-icons'; 

const Breadcrumbs = ({ paths }) => { 
	return ( 
		<nav aria-label="breadcrumb"> 
			<ol className="breadcrumb bg-light p-3 rounded"> 
				<li className="breadcrumb-item"> 
					<Link to="/"> 
						<FontAwesomeIcon icon={faHome} 
							className="mr-2" /> 
						{/* Home */} 
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
