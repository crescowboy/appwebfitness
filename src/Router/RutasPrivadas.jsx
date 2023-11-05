import React, { useContext } from 'react'
import { Contexto } from '../Context/Contexto'
import { Navigate } from 'react-router-dom';

const RutasPrivadas = ({children}) => {
    const {estado} = useContext(Contexto);
  return (estado)
  ? children
  : <Navigate to='/home'></Navigate>
}

export default RutasPrivadas
