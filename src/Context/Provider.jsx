import React, { useState } from 'react'
import { Contexto } from './Contexto'

const Provider = ({children}) => {
  
    const [planSeleccionado,setPlanSeleccionado] = useState();
  
  
  
    return (
        <Contexto.Provider value={{
            planSeleccionado,
            setPlanSeleccionado
        }}>
        {children}
        </Contexto.Provider>
  )
}

export default Provider
