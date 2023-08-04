import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import Home from './Pages/Home';


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Inicio />}></Route>
            <Route path='/home' element={<Home />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
