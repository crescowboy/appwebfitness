import React, { useState } from 'react'
import { Contexto } from './Contexto';


const Provider = ({children}) => {
  
    const [planSeleccionado,setPlanSeleccionado] = useState("Plan Basico");
    const [prueba, setPrueba] = useState("HOLA");
  
  
  
    return (
        <Contexto.Provider value={{
            planSeleccionado,
            setPlanSeleccionado,
            prueba,
            setPrueba
        }}>
        {children}
        </Contexto.Provider>
  )
}

export default Provider
