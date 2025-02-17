import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Breadcrumbs from './Breadcrumbs';
import './style.css';

const Projects = () => {
  const breadcrumbsPaths = [
    { title: 'Home', to: '/' },
    { title: 'Projects', to: '/projects' }
  ];

  const projects = [
    {
      title: 'Cleaning Services, Inc.',
      image: 's1.jpeg',
      link: 'https://website1-kohl.vercel.app' 
    },
    {
      title: 'Employee Opportunity',
      image: 's2.jpeg',
      link: 'https://website-woad-psi-92.vercel.app' 
    },
    {
      title: 'Travel Website',
      image: 's3.jpeg',
      link: 'https://travel-sandy-seven.vercel.app' 
    },
    {
      title: 'Utensil Website',
      image: 's4.jpeg',
      link: 'https://projects-alpha-lake.vercel.app' 
    },
  ];

  return (
    <section id="projects" className="container text-center box">
      <Breadcrumbs paths={breadcrumbsPaths} />
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