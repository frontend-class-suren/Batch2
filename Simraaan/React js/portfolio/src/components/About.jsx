import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './style.css';

const About = () => {
  return (
    <>
    <section id='about' className='container text-center'>
        <div className='row'>
            <div className='col-md-8 offset-md-2'>
                <h2 className='section-title '><FontAwesomeIcon icon={faUser} className='mr-2'/>About Me</h2>
                <div className='profile-image-container'>
                    <img src="/user.png" alt="geek pic" className='img-fluid rounded-circle profile-image' />
                </div>
                <p className='section-description mt-4'>I am a skilled Internship Trainee with over 6 months of hands-on experience in full-stack web development. My expertise includes using technologies such as Node.js, 
                    Java, JSP, HTML, CSS, and Bootstrap. As a problem solver, I have successfully designed and developed user-friendly, responsive web applications.</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default About