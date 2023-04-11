import React from 'react';
import { Navbar } from './Navbar';
import './Software.css';
import BurnBook from '../content/BurnBook.png';
import JapaneseRPG from '../content/rpg.png';
import FMPshot from '../content/FMP.png';

export const Software = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='textElements'>
          <h1>IINE</h1>
          <p className='textBody'>Iine is a Japanese learning website mixed with RPG game elements, created in a group of five. <br></br><br></br>
          Players can sign up, log in, customise their 
          character and practice their Japanese through quizzes. With experience, they will earn xp, achievements and coins which will 
          enable them to buy outfits at the shop and change into them in the wardrobe. Players can keep track of their progress by viewing the words they learnt in the bookshelf, 
          or by viewing their stats in the stats bar.<br></br><br></br>
          The app was designed using Trello boards, Excalidraw and Photoshop.
          It was built using MongoDB database, JavaScript with React framework, Redux toolkit, Node.js, Express.js, Cypress, Jest
          and TailwindCSS.</p>
          <a href='https://github.com/SimpleLuke/japanese-learning-RPG' target="blank" className='aa'><p className='textButton'>View the code</p></a>
        </div>
        <div className='image'>
          <img src={JapaneseRPG} alt='JapaneseRPG' className='imageimg'/>
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

      <div className='container'>
        <div className='textElements'>
          <h1>FLORESENCE</h1>
          <p className='textBody'>University final project - achieved a mark of 75% <br></br><br></br>
          Floresence is a puzzle game set in a circuit board which evolves into a japanese temple and garden as puzzles are completed. <br></br><br></br>
          Built in Unity and developed using C#.</p>
          <p className='textQuote'>"This was a successful project which had a solid and consistent visual design and effective execution. It was brave and 
            ambitious to take on a considerable degree of game coding at this stage with not that much prior practice" - John Weinbren (head of department)</p>
          <a href='https://github.com/SimpleLuke/acebook-fire' target="blank" className='aa'><p className='textButton'>View the code</p></a>
        </div>
        <div className='image'>
          <img src={FMPshot} alt='FMPshot' className='imageimg'/>
        </div>
      </div>
      
    </>
  )
}