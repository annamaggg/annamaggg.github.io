import React from 'react';
import { Navbar } from './Navbar';
import './Software.css';
import BurnBook from '../content/BurnBook.png';
import JapaneseRPG from '../content/rpg.png';
import FMPshot from '../content/FMP.png';
import neighbourcare from '../content/neighbourcare.png';
import studioProj from '../content/studioProj.png';
import bankAccount from '../content/bankAccount.png';
import dinoRescue from '../content/dinoRescue.png';
import spaceX from '../content/spaceXLander.png';

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
          <h1>BANK ACCOUNT</h1>
          <p className='textBody'>Tech test application. <br></br><br></br>
          The user is able to input deposit amounts, or withdrawal amounts into a bank system. A statement is 
          returned including the date of each transaction, amount of withdrawal or deposit and the resulting balance. </p>
          <a href='https://github.com/annamaggg/bank_account' target="blank" className='aa'><p className='textButton'>View the code</p></a>
        </div>
        <div className='image'>
          <img src={bankAccount} alt='bankAccount' className='imageimg'/>
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

      <div className='container'>
        <div className='textElements'>
          <h1>STUDIO PROJECT</h1>
          <p className='textBody'>
          This university project involved creating code art responsive to music frequencies which was 
          put together into a music video. All artwork was created with the p5.js Javascript library using 
          OpenProcessing.<br></br> 
          To activate music response, click the screen in the example art scripts below</p>
          <a href='https://openprocessing.org/sketch/896416' target="blank" className='aa'><p className='textButton'>View a script</p></a>
        </div>
        <div className='image'>
          <img src={studioProj} alt='studioProj' className='imageimg'/>
        </div>
      </div>

      <div className='container'>
        <div className='textElements'>
          <h1>DINO RESCUE</h1>
          <p className='textBody'>
          Created a small platform game where the player must deliver medicine to a lost dinosaur, if they can 
          avoid the pteradactlys. All artwork was created in Photoshop and the game was built with the p5.js Javascript library using 
          OpenProcessing.</p>
          <a href='https://openprocessing.org/sketch/715040' target="blank" className='aa'><p className='textButton'>View the code</p></a>
        </div>
        <div className='image'>
          <img src={dinoRescue} alt='dinoRescue' className='imageimg'/>
        </div>
      </div>

      <div className='container'>
        <div className='textElements'>
          <h1>SPACE X LANDER</h1>
          <p className='textBody'>
          Created a small game where the player must land a rocket on the landing pad. If land too 
          quickly, they will crash. All artwork was created in Photoshop and the game was built with the p5.js Javascript library using 
          OpenProcessing.</p>
          <a href='https://openprocessing.org/sketch/683818' target="blank" className='aa'><p className='textButton'>View the code</p></a>
        </div>
        <div className='image'>
          <img src={spaceX} alt='spaceX' className='imageimg'/>
        </div>
      </div>

      <div className='container'>
        <div className='textElements'>
          <h1>NEIGHBOURCARE</h1>
          <p className='textBody'>Paid work - Dec 2020<br></br><br></br>
          Neighbourcare is an organisation which helps deliver medication and offer transport to appointments 
          for vulnerable people, created during lockdown. I contributed to the software used by this organisation by creating
          a function which converts a JSON record of data to an xml format for diplay in another file.  </p>
          <a href='https://ewhneighbourcare.org.uk' target="blank" className='aa'><p className='textButton'>View client website</p></a>
        </div>
        <div className='image'>
          <img src={neighbourcare} alt='neighbourcare' className='imageimg'/>
        </div>
      </div>
      
    </>
  )
}