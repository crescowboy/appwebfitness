import React, { useReducer, useState } from 'react'
import { Contexto } from './Contexto';


// const init =()=>{
//     const valor = localStorage.getItem("estado");
//     return{
//         estado:!!valor
//     }
// }


const Provider = ({children}) => {
  
    const [planSeleccionado,setPlanSeleccionado] = useState();
    const [prueba, setPrueba] = useState();
    const [plansele, setPlansele] = useState();
    const [muestraFormPago, setMuestraFormPago] = useState(false);
    const [estado,setEstado] = useState(false);
    // const [logeado,dispatch] = useReducer(miReducer,{},init);
  
  
  
    return (
        <Contexto.Provider value={{
            planSeleccionado,
            setPlanSeleccionado,
            prueba,
            setPrueba,
            plansele,
            setPlansele,
            muestraFormPago,
            setMuestraFormPago
        }}>
        {children}
        </Contexto.Provider>
  )
}

export default Provider
