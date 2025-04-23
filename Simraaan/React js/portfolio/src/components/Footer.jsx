import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './style.css';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <>
    <footer className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <p>©️ 2023 All rights reserved.</p>
                </div>
                <div className='col-md-6 text-md-right'>
                    <ul className='social-icons list unstyled'>
                        <li><a href="https://linkedin.com/in/yourusername" target='_blank' rel='noopener noreferrer'>
                        < FontAwesomeIcon icon={faLink}/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer