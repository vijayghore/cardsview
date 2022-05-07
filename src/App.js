import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Youtube from './components/Youtube';
import Airbnb from './components/Airbnb';
import Error from './components/Error';
import OyoRooms from './components/OyoRooms';
import Olx from './components/Olx';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path='/' element={<Youtube />} />
          <Route path='/airbnb' element={<Airbnb />} />
          <Route path='/oyorooms' element={<OyoRooms />} />
          <Route path='/olx' element={<Olx />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App
