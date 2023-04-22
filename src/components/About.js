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
        <p1 className="textBody">This is a paragraph about me</p1>
      </div>

        <div className='icons'>
          <a href='https://github.com/annamaggg' target="blank"><img src={githubIcon} alt='githubIcon' className='icon'/></a>
          <a href='https://www.linkedin.com/in/anna-magnusson-519658199/' target="blank"><img src={linkedinIcon} alt='linkedinIcon' className='icon'/></a>
        </div>
      
        {/* <Sketch setup={setup} draw={draw} /> */}
    </>
  )
}