import React from 'react';
import { Navbar } from './Navbar';
import './Software.css';
import BurnBook from '../content/BurnBook.png';

export const Software = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='textElements'>
          <h1>BURN BOOK</h1>
          <p className='textBody'>Created a social media web application in a group of six with a Mean Girls 
          theme. Users can sign up, log in, post, comment and like posts. The app 
          was designed using Trello boards, Excalidraw and Photoshop.
          It was built using MongoDB database, JavaScript with React framework, 
          and TailwindCSS.</p>
          <a href='https://github.com/SimpleLuke/acebook-fire' target="blank" className='aa'><p className='textButton'>View the code</p></a>
        </div>
        <div className='image'>
          <img src={BurnBook} alt='Burnbook' className='imageimg'/>
        </div>
      </div>
      <div className='container'>
        <div className='textElements'>
          <h1>BURN BOOK</h1>
          <p className='textBody'>Created a social media web application in a group of six with a Mean Girls 
          theme. Users can sign up, log in, post, comment and like posts. The app 
          was designed using Trello boards, Excalidraw and Photoshop.
          It was built using MongoDB database, JavaScript with React framework, 
          and TailwindCSS.</p>
          <a href='https://github.com/SimpleLuke/acebook-fire' target="blank" className='aa'><p className='textButton'>View the code</p></a>
        </div>
        <div className='image'>
          <img src={BurnBook} alt='Burnbook' className='imageimg'/>
        </div>
      </div>
    </>
  )
}