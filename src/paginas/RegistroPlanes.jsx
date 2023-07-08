import React, { useState } from 'react';

const RegistroPlanes = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [planSeleccionado, setPlanSeleccionado] = useState('');

  const handleRegistro = (e) => {
    e.preventDefault();

    // Realizar la lógica de registro o enviar los datos a través de una API

    // Restablecer los campos del formulario
    setNombre('');
    setEmail('');
    setPlanSeleccionado('');

    // Mostrar un mensaje de registro exitoso o realizar otra acción
    alert('Registro exitoso');
  };

  return (
    <div>
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
            <option value="plan1">Plan 1</option>
            <option value="plan2">Plan 2</option>
            <option value="plan3">Plan 3</option>
          </select>
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default RegistroPlanes;
