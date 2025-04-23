import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import Skill from './Skill';

const Resume = () => {
    const BreadcrumbsPaths = [
        {title: 'Home', to: '/'},
        {title: 'Resume', to:'/resume'}
    ];
  return (
    <>
    <section id='resume' className='container text-center'><Breadcrumbs paths={BreadcrumbsPaths}/>
    <div className='row justify-content-center align-items-center'>
        <div className='col-md-8'>
            <h2 className='section-title'><FontAwesomeIcon icon={faFileDownload} className='mr-2' />Resume</h2>
            <p className='section-description'>Download my resume to learn more about my professional experience and skills.</p>
            <a href="path/to/your/resume.pdf" className='resume-download-btn' download>Download Resume</a>
            <Skill/>
        </div>
    </div>
    </section>
    </>
  )
}

export default Resume