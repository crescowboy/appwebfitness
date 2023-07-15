import React, { useState } from 'react';

const FormPago = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
  
    const handlePaymentSubmit = (e) => {
      e.preventDefault();
  
      // Simulación del proceso de pago
      // Aquí puedes agregar la lógica de validación y procesamiento de pago simulado
  
      // Mostrar un mensaje de pago exitoso o realizar otra acción
      alert('Pago realizado con éxito');
      
      // Restablecer los campos del formulario
      setCardNumber('');
      setExpiryDate('');
      setCvv('');
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
