import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

import Home from './routes/home';
import Upload from './routes/upload';
import About from './routes/about';
import Gallery from './routes/gallery';

function App() {

  return (
    <div className="App">
      <Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Upload" element={<Upload />} />
          <Route path="/About" element={<About />} />
          <Route path="/Gallery" element={<Gallery />} />
        </Routes>
      </Navigation>
    </div>
  )
}

export default App
