import React, { useState } from 'react'
import Nav from '../Nav'
import imgEntreno from '../img/entreno.jpg';
import imgEctomorfo from '../img/ectomorfo.png'
import imgMesomorfo from '../img/mesomorfo.png'
import imgEndomorfo from '../img/endomorfo.png'
import { useNavigate } from 'react-router-dom';
import ModalComponent from './ModalComponent';

const Entreno_page = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    // Lógica para obtener la imagen y la descripción del tipo de cuerpo
    // imageSrc y description deben ser establecidos antes de abrir el modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleGoBack = () => {
    navigate(-1); // Navega a la página anterior
  };

  const infoEctomorfo =()=>{

  }

  return (
   <div>
    <header>
    <Nav />
    </header>
      
      <div className="entrenamientos-container">
        <h1>Entrenamientos Personalizados</h1>
        <p>¡Bienvenido a los entrenamientos personalizados!</p>
        <p>En esta página encontrarás información detallada sobre nuestros servicios de entrenamiento personalizado.</p>

        <div className="entrenamientos-info">
          <h2>Beneficios de los entrenamientos personalizados</h2>
          <ul>
            <li>Adaptados a tus necesidades y objetivos específicos.</li>
            <li>Mayor atención y seguimiento por parte del entrenador.</li>
            <li>Programas de entrenamiento personalizados y progresivos.</li>
            <li>Mejoría en la técnica y prevención de lesiones.</li>
            <li>Motivación y apoyo constante.</li>
          </ul>
        </div>


        <div className='entrenamientos-tipocuerpo'>
          <h2>Tipo de cuerpo</h2>

        <div className="container">
  <div className="card-entreno">
    <div className="card-entreno-title">Ectomorfos</div>
    <div className="card-entreno-content">
      <img src={imgEctomorfo} alt="Ectomorfo" onClick={openModal}/>
    </div>
  </div>

  <div className="card-entreno">
    <div className="card-entreno-title">Mesomorfos</div>
    <div className="card-entreno-content">
      <img src={imgMesomorfo} alt="Mesomorfo" />
    </div>
  </div>

  <div className="card-entreno">
    <div className="card-entreno-title">Endomorfos</div>
    <div className="card-entreno-content">
      <img src={imgEndomorfo} alt="Endomorfo" />
    </div>
  </div>
</div>

</div>

{isModalOpen && (
        <ModalComponent
          isOpen={isModalOpen}
          closeModal={closeModal}
          // imageSrc={imageSrc}
          // description={description}
        />
      )}


        <div className="entrenamientos-contact">
          <h2>¡Contáctanos para obtener más información!</h2>
          <p>Si estás interesado en nuestros servicios de entrenamiento personalizado, no dudes en contactarnos.</p>
          <div className='buttons-entrenoPage'>
          <button className='cta-button' onClick={handleGoBack}>Volver</button>
          <button className='cta-button' onClick={handleGoBack}>Contactanos</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Entreno_page
