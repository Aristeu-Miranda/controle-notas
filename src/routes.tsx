import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './Pages/Inicio';


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Inicio />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
