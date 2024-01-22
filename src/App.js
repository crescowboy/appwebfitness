import { Route, Routes } from 'react-router-dom';
import './App.css';
import './css/Entreno_Page.css';
import './css/Progreso_Page.css';
import './css/Food_Page.css';
import './css/FormPago.css';
import React from 'react';
import Home from './paginas/Home';
import Planes from './paginas/Planes';
import Entreno_page from './paginas/Entreno_page';
import Progreso_page from './paginas/Progreso_page';
import Food_page from './paginas/Food_page';
import RegistroPlan from './paginas/RegistroPlan';
import Provider from './Context/Provider';



function App() {

  

  return (
  
   <>
    <Provider>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/planes' element={<Planes></Planes>}></Route>
        <Route path='/registro' element={<RegistroPlan></RegistroPlan>}></Route>
        <Route path='/entreno' element={<Entreno_page></Entreno_page>}></Route>
        <Route path='/progreso' element={<Progreso_page></Progreso_page>}></Route>
        <Route path='/food' element={<Food_page></Food_page>}></Route>
        
      </Routes>
    </Provider>
   </>
  );
};

export default App;
