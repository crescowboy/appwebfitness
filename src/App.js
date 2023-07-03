import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './paginas/Home';
import Planes from './paginas/Planes';


function App() {

  

  return (
  
   <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/planes' element={<Planes></Planes>}></Route>
      </Routes>
   </>
  );
};

export default App;
