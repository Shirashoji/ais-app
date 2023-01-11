import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

import Home from './routes/home';

function App() {

  return (
    <div className="App">
      <Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Navigation>
    </div>
  )
}

export default App
