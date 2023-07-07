import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './paginas/Home';
import Planes from './paginas/Planes';
import Entreno_page from './paginas/Entreno_page';


function App() {

  

  return (
  
   <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/planes' element={<Planes></Planes>}></Route>
        <Route path='/entreno' element={<Entreno_page></Entreno_page>}></Route>
      </Routes>
   </>
  );
};

export default App;
