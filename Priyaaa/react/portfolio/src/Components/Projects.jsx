import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import './Projects.css';
const Projects = () => { 
	const projects = [
		{
		  title: 'Legal Solutions.',
		  image: 'https://img.freepik.com/premium-psd/lawyer-firm-instagram-post-social-media-template_660886-531.jpg'
		  // link: 'https://website1-kohl.vercel.app' 
		},
		{
		  title: 'Business Opportunity',
		  image: 'https://www.buylandingpagedesign.com/example/business-opportunity-responsive-landing-page-design-example-for-your-online-business-001-th_1.jpg',
		  // link: 'https://website-woad-psi-92.vercel.app' 
		},
		{
		  title: 'Employment Opportunity',
		  image: 'https://www.buylandingpagedesign.com/example/employment-opportunity-for-career-responsive-lp-010-index-page-th.jpg',
		  // link: 'https://projects-alpha-lake.vercel.app' 
		},
		{
		  title: 'Travel Tour',
		  image: 'https://www.buylandingpagedesign.com/example/dream-destination-travel-search-landing-page-desgin-021-th.jpg',
		  // link: 'https://travel-sandy-seven.vercel.app' 
		},
	  ];
	
	return(
		<section id="projects" className="container text-center box">
      {/* <Breadcrumbs paths={breadcrumbsPaths} /> */}
      <h2 className="section-title">
        <FontAwesomeIcon icon={faCode} className="mr-2" />
        Projects
      </h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-6" key={index}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid project-image"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
	);
}; 

export default Projects;
