import { faCode, faCogs, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './style.css';

const Skill = () => {
  return (
    <>
    <section id='skills' className='container' style={{paddingLeft: '0px'}}>
        <h2 className='section-title'><FontAwesomeIcon icon={faCogs} className='mr-2'/>Skills</h2>
        <ul className='skills-list'>
            <li><FontAwesomeIcon icon={faCode} className='mr-2'/>HTML</li>
            <li><FontAwesomeIcon icon={faCode} className='mr-2'/>CSS</li>
            <li><FontAwesomeIcon icon={faCode} className='mr-2'/>Javascript</li>
            <li><FontAwesomeIcon icon={faLaptopCode} className='mr-2'/>React</li>
            <li><FontAwesomeIcon icon={faLaptopCode} className='mr-2'/>Bootstrap</li>
            {/* <li><FontAwesomeIcon icon={faLaptopCode} className='mr-2'/>DSA</li> */}
            <li><FontAwesomeIcon icon={faLaptopCode} className='mr-2'/>Node.js</li>
            {/* <li><FontAwesomeIcon icon={faLaptopCode} className='mr-2'/>Python</li> */}
            <li><FontAwesomeIcon icon={faLaptopCode} className='mr-2'/>Java</li>

        </ul>
    </section>
    </>
  )
}

export default Skill