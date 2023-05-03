import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Software } from './components/Software';
import { About } from './components/About';
import { VisualDesign } from './components/VisualDesign';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={< Home />}/>
        <Route path='/software' element={< Software />}/>
        <Route path='/visual-design' element={< VisualDesign />}/>
        <Route path='/about' element={< About />}/>
      </Routes>
    </div>
  );
}

export default App;
