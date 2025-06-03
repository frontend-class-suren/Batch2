import React from 'react';
import './About.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faUser } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <section id="about"
            className="container text-center">
            <div className="row">
                <div className="header col-md-8 offset-md-2">
                    <div className="profile-image-container">
                    {/* <FontAwesomeIcon icon={faUser} /> */}
                    {/*<img width={330} height={330} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtfsxS225GUkxZ2dKhuwVqgzQq8VFDHGiQbw&s" alt="" />*/}
                    <img className='image' width={323} height={325} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjHNf3WkJp7E5H7BR86f5RYuPQ50iBl9_b6A&s" alt="" />
                    </div>
                    <div className='heading'>
                    <h3>Hello,</h3>
                    <h1>I'm Priya</h1>
                    <h2>A Front-end developer</h2>
                    </div>
                    <p className="section-description mt-4 width-20px">
                        I am a front-end developer. My expertise includes using technologies such as
                        React, JavaScript, HTML, CSS, and Bootstrap.
                    </p>
                    {/* <button><FontAwesomeIcon icon={faShoppingBag}/>  Hire me</button> */}
                </div>
            </div>
        </section>
    );
};
export default About;
