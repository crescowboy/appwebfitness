import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Contexto } from '../Context/Contexto';

const FormPago = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const {planSeleccionado,setPlanSeleccionado} = useContext(Contexto)
    const [cvv, setCvv] = useState('');
    const navigate = useNavigate();

    
  
    const handlePaymentSubmit = (e) => {
      e.preventDefault();
  
      // Simulación del proceso de pago
      // Aquí puedes agregar la lógica de validación y procesamiento de pago simulado
  
      
      
      // Restablecer los campos del formulario
      setCardNumber('');
      setExpiryDate('');
      setCvv('');

      Swal.fire({
        title: 'Confirmacion',
        text: 'Estas seguro que quieres contratar el plan?',
        icon: 'info',
        timerProgressBar: true,
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: "Si",
        cancelButtonText: "No"
      })
        .then((result) => {
          // Esta es la función que se ejecuta cuando se cierra la primera alerta
          // Puedes mostrar la segunda alerta aquí
          if (result.isConfirmed) {
            Swal.fire({
              title: 'Plan contratado con exito!',
              text: 'Nos cantactaremos con usted...',
              icon: 'success',
              timer: 2000,
              timerProgressBar: true,
            }).finally(() => {
              // Navegar al principio de la página después de cerrar la segunda alerta
              navigate("/");
            });
          } 
        });

    };
  
    return (
        <div className='form-pago'>
      <form onSubmit={handlePaymentSubmit}>
        <div>
          <label htmlFor="cardNumber">Número de tarjeta:</label>
          <input
            type="text"
            id="cardNumber"
            className="number-input"
            maxLength={16}
            value={cardNumber}
            onInput={(e) => {
              const value = e.target.value;
              e.target.value = value.replace(/\D/g, '').slice(0, 16);
              setCardNumber(e.target.value);
            }}
            inputMode="numeric"
            required
          />
        </div>
        <div>
          <label htmlFor="expiryDate">Fecha de vencimiento:</label>
          <input
            type="date"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            maxLength={4}
            onInput={(e) => {
              const value = e.target.value;
              e.target.value = value.replace(/\D/g, '').slice(0, 4);
              setCvv(e.target.value);
            }}
            required
          />
        </div>



        <button type="submit">Realizar pago</button>
      </form>
      </div>
    );
}

export default FormPago
