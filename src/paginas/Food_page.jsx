import React, { useContext } from 'react'
import Nav from '../Nav'
import { Contexto } from '../Context/Contexto'

const Food_page = () => {

  const {prueba,setPrueba} = useContext(Contexto)

  const hola = () =>{
    setPrueba("prueba")
  }

  console.log("VALOR: ",prueba)

  return (
    <div>
      <Nav></Nav>
        
      <div className="plan">
          <h2 className="plan-title">Plan Avanzado</h2>
          <p className="plan-description">
            Acceso completo a nuestra plataforma, entrenamientos personalizados y asesoramiento nutricional.
          </p>
          <p className="plan-price">$19.99/mes</p>
          <a href="/" className="cta-button" onClick={hola}>
            ¡Inscríbete ahora!
          </a>
        </div>
    </div>
  )
}

export default Food_page
