import React from 'react';
import { Navbar } from './Navbar';

export const Software = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1>Burn Book</h1>
        <p>Created a social media web application in a group of six with a mean girls 
        theme. Users can sign up, log in, post, comment and like posts. The app 
        was designed using Trello boards, Excalidraw and Photoshop.
        It was built using MongoDB database, JavaScript with React framework, 
        and TailwindCSS.</p>
        <a href='https://github.com/SimpleLuke/acebook-fire' target="blank"><p>View the code</p></a>
      </div>
    </>
  )
}