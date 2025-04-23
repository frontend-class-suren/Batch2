import React from 'react'
import Breadcrumbs from './Breadcrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const Contact = () => {
    const BreadcrumbsPaths = [
        {title: 'Home', to:'/'},
        {title: 'Contact', to:'/contact'}
    ];
  return (
    <>
    <section id='contact' className='container'>
        <Breadcrumbs paths ={BreadcrumbsPaths} />
        <h2 className='section-title'>Contact</h2>
        <p className='section-description'>Feel free to reach out for collaboration or inquiries.</p>
        <ul className='contact-list list-unstyled'>
            <li><FontAwesomeIcon icon={faEnvelope} className='contact-icon'/>shresthasimran713@gmail.com</li>
            <li><FontAwesomeIcon icon={faPhone}/>9847318343</li>
        </ul>
    </section>
    </>
  )
}

export default Contact