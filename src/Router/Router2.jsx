import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RegistroPlan from '../paginas/RegistroPlan'

const Router2 = () => {
  return (
    <>
      <Routes>
      <Route path='/registro' element={<RegistroPlan></RegistroPlan>}></Route>
      </Routes>
    </>
  )
}

export default Router2
