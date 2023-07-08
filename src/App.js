import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './paginas/Home';
import Planes from './paginas/Planes';
import Entreno_page from './paginas/Entreno_page';
import Progreso_page from './paginas/Progreso_page';
import Food_page from './paginas/Food_page';
import RegistroPlanes from './paginas/Registroplanes';


function App() {

  

  return (
  
   <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/planes' element={<Planes></Planes>}></Route>
        <Route path='/entreno' element={<Entreno_page></Entreno_page>}></Route>
        <Route path='/progreso' element={<Progreso_page></Progreso_page>}></Route>
        <Route path='/food' element={<Food_page></Food_page>}></Route>
        <Route path='registro' element={<RegistroPlanes></RegistroPlanes>}></Route>
      </Routes>
   </>
  );
};

export default App;
