import React, { useState } from 'react';
import Nav from '../Nav';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';



const RegistroPlan = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [planSeleccionado, setPlanSeleccionado] = useState('');
  const navigate = useNavigate();

  const handleRegistro = (e) => {
    e.preventDefault();

    // Realizar la lógica de registro o enviar los datos a través de una API

    // Restablecer los campos del formulario
    setNombre('');
    setEmail('');
    setPlanSeleccionado('');

    // Mostrar un mensaje de registro exitoso o realizar otra acción
    Swal.fire({
      title: '', 
      text: 'Enviado con exito',
      icon: 'success',
      timer: 2000,
      timerProgressBar: true,
    }).then((result) =>{
      // Navegar al principio de la página después de cerrar la alerta
      if(result.dismiss === Swal.DismissReason.timer){
        navigate('/');
      }

    })

    
  };

  const regresar = ()=>{
    navigate('/')
  }

  return (
    <div>
        <header>
            <div>
            <Nav></Nav>
            </div>
            
        </header>
    <div className='registro-padre'>

      <button className='icon-back' onClick={regresar}>
        <BiArrowBack></BiArrowBack>
        
        </button>  
    <div className='registro-planes'>
    
    
      <h1>Registro de Planes</h1>
      <form onSubmit={handleRegistro}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="plan">Selecciona un plan:</label>
          <select id="plan" value={planSeleccionado} onChange={(e) => setPlanSeleccionado(e.target.value)} required>
            <option value="">-- Selecciona un plan --</option>
            <option value="Plan Basico">Plan Basico</option>
            <option value="Plan Avanzado">Plan Avanzado</option>
            <option value="Plan Premium">Plan Premium</option>
          </select>
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default RegistroPlan;

