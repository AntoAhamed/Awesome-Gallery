import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Gallery from './Components/Gallery';
import Cover from './Components/Images/cover.jpg'

const App = () => {
  return (
    <>
      <div className='cover'>
        <img src={Cover} alt='...' height={'100%'} width={'100%'}></img>
      </div>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Gallery />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
