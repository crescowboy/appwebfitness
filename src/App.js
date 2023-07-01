import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './paginas/Home';


function App() {

  

  return (
  
   <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
   </>
  );
};

export default App;
