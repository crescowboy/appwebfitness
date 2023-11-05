import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Planes from '../paginas/Planes'
import Home from '../paginas/Home'
import RegistroPlan from '../paginas/RegistroPlan'
import Entreno_page from '../paginas/Entreno_page'
import Progreso_page from '../paginas/Progreso_page'
import Food_page from '../paginas/Food_page'
import RutasPublicas from './RutasPublicas'
import Router2 from './Router2'
import RutasPrivadas from './RutasPrivadas'


const Router1 = () => {
  return (
    <>
        <Routes>
            <Route path='/Home' element={
              <RutasPublicas>
                <Home></Home>
              </RutasPublicas>
            }></Route>
            <Route path='/planes' element={
              <RutasPublicas>
                <Planes></Planes>
              </RutasPublicas>
            }></Route>
            <Route path='/entreno' element={
              <RutasPublicas>
                <Entreno_page></Entreno_page>
              </RutasPublicas>
            }></Route>
            <Route path='/progreso' element={
              <RutasPublicas>
                <Progreso_page></Progreso_page>
              </RutasPublicas>
            }></Route>
            <Route path='/food' element={
              <RutasPublicas>
                <Food_page></Food_page>
              </RutasPublicas>
            }></Route>
            <Route path='/' element={
              <RutasPublicas>
                <Navigate to="/Home"></Navigate>
              </RutasPublicas>
            }></Route>
            
            <Route path='/*' element={
              <RutasPrivadas>
                <Router2></Router2>
              </RutasPrivadas>
            }></Route>
            
            
        </Routes>
    </>
  )
}

export default Router1
