import React, { useContext } from 'react'
import { Contexto } from '../Context/Contexto'
import { Navigate } from 'react-router-dom';

const RutasPublicas = ({children}) => {
    const {estado} = useContext(Contexto);
  return (!estado)
  ? children
  : <Navigate to='/registro'></Navigate>
}

export default RutasPublicas
