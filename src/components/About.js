import React from 'react';
import Sketch from 'react-p5';
import './About.css';
import { Navbar } from './Navbar';
import githubIcon from '../content/githubIcon.png';
import linkedinIcon from '../content/linkedinIcon.png';

export const About = () => {

  return (
    <>
      <Navbar />
      <div className='paragraph'>
        <h1 className='text-page-heading'>About me</h1>
        <p className="text-page-intro">I recently completed a software development bootcamp at Makers Academy, where I learned the principles of object-oriented programming, test-driven development, paired programming, and agile workflow, among other skills. I am now looking for exciting opportunities to develop my capabilities further and apply my skills to real-world projects. Thank you for taking the time to visit my page, and I hope you enjoy exploring my work.<br></br><br></br>
        I am open to collaborate on projects and love talking to new people so please get in touch if you would like to chat! <br></br><br></br><br></br><br></br>
        Email me at: <br></br><br></br>
        annamagnusson99@gmail.com</p>
      </div>

        <div className='icons'>
          <a href='https://github.com/annamaggg' target="blank"><img src={githubIcon} alt='githubIcon' className='icon'/></a>
          <a href='https://www.linkedin.com/in/anna-magnusson-519658199/' target="blank"><img src={linkedinIcon} alt='linkedinIcon' className='icon'/></a>
        </div>
      
        {/* <Sketch setup={setup} draw={draw} /> */}
    </>
  )
}