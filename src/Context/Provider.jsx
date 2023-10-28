import React, { useState } from 'react'
import { Contexto } from './Contexto';


const Provider = ({children}) => {
  
    const [planSeleccionado,setPlanSeleccionado] = useState();
    const [prueba, setPrueba] = useState();
    const [plansele, setPlansele] = useState();
  
  
  
    return (
        <Contexto.Provider value={{
            planSeleccionado,
            setPlanSeleccionado,
            prueba,
            setPrueba,
            plansele,
            setPlansele
        }}>
        {children}
        </Contexto.Provider>
  )
}

export default Provider
