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
  const [ModalContent, setModalContent] = useState('');

  const openModal = (content) => {
    setModalContent(content);
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
    const content = (
      <div className='modal-guia'>
        <h2>Ectomorfo</h2>
    {/* <img src={imgEctomorfo} alt="Ectomorfo" /> */}
    <p>
      El tipo de cuerpo Ectomorfo se caracteriza por ser delgado, con extremidades largas,
      y un metabolismo rápido. Las personas con este tipo de cuerpo a menudo tienen dificultades
      para ganar peso y músculo. Suelen tener una estructura delgada y poca grasa corporal.
    </p>
    <p>
      Algunos consejos para los Ectomorfos incluyen un enfoque en el entrenamiento de fuerza
      y el consumo suficiente de calorías y proteínas para ayudar en el aumento de masa muscular.
    </p>
    <ul>
      <li>Entrenamiento de fuerza: Prioriza el levantamiento de pesas y ejercicios de fuerza para estimular el crecimiento muscular.</li>
      <li>Descanso adecuado: Asegúrate de dormir lo suficiente para permitir que el cuerpo se recupere y se repare.</li>
      <li>Alimentación equilibrada: Consume una dieta rica en proteínas, carbohidratos y grasas saludables para proporcionar energía y construir masa muscular.</li>
      <li>Frecuencia en las comidas: Realiza varias comidas pequeñas a lo largo del día para mantener un suministro constante de nutrientes.</li>
      <li>Consumo calórico: Asegúrate de consumir suficientes calorías, ya que los Ectomorfos tienden a tener un metabolismo más acelerado.</li>
    </ul>
      </div>
    );
    openModal(content);
  }

  const infoMesomorfo =()=>{
    const content = (
      <div className='modal-guia'>
        <h2>Mesomorfo</h2>
        <p>Descripción: Los mesomorfos suelen tener una constitución atlética con hombros 
            anchos y una proporción muscular. Estos individuos pueden ganar músculo con relativa
            facilidad y mantener bajos niveles de grasa.</p>
        <p>Detalles de entrenamiento y alimentación: Los mesomorfos suelen tener una facilidad para
           ganar músculo y mantenerse delgados. Para ellos, es importante centrarse en un equilibrio 
           adecuado entre entrenamiento de fuerza y cardio para mantener la masa muscular y controlar la grasa.
          Deben centrarse en una dieta equilibrada, rica en proteínas y carbohidratos de calidad. Esto les proporcionará
           la energía necesaria para el entrenamiento y apoyará la construcción muscular.</p>
        <ul>
          <li>Entrenamiento equilibrado: Mesomorfos pueden beneficiarse de una combinación de entrenamiento de fuerza y cardio.</li>
          <li>Dieta balanceada: Consumir una dieta equilibrada y variada con un enfoque en proteínas magras y carbohidratos complejos.</li>
          <li>Enfoque en el desarrollo muscular: Pueden concentrarse en ejercicios que desarrollen y mantengan su masa muscular.</li>
          <li></li>
          <li></li>
        </ul>
      </div>
    );
    openModal(content);
  }

  const infoEndomorfo =()=>{
    const content = (
      <div className='modal-guia'>
        <h2>Endomorfo</h2>
        <p>Descripción: Los endomorfos tienden a tener una constitución más redonda y son propensos a ganar peso fácilmente.
           Tienen una estructura más ancha con un metabolismo más lento.</p>
        <p>Detalles de entrenamiento y alimentación:
          Los endomorfos pueden tener dificultad para perder peso y ganar músculo con facilidad. Por ello, un enfoque en la dieta y el ejercicio es clave para mantener un peso saludable.
          Deben centrarse en ejercicios aeróbicos y de resistencia para controlar la grasa y aumentar el metabolismo.
          Mantener una dieta equilibrada con un control estricto de la ingesta de calorías y macronutrientes es esencial.</p>
        
        <ul>
          <li>Cardio y resistencia: Enfocarse en ejercicios cardiovasculares para mantener el peso y la resistencia para tonificar el cuerpo.</li>
          <li>Control de la dieta: Ser cuidadosos con la ingesta calórica y equilibrio de macronutrientes.</li>
          <li>Frecuencia de comidas y porciones: Optar por comidas más pequeñas y regulares, controlando las porciones.</li>
        </ul>
      </div>
    );
    openModal(content);
  }

  return (
   <div>
    <header>
    {/* <Nav /> */}
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
      <img src={imgEctomorfo} alt="Ectomorfo" onClick={infoEctomorfo}/>
    </div>
  </div>

  <div className="card-entreno">
    <div className="card-entreno-title">Mesomorfos</div>
    <div className="card-entreno-content">
      <img src={imgMesomorfo} alt="Mesomorfo" onClick={infoMesomorfo}/>
    </div>
  </div>

  <div className="card-entreno">
    <div className="card-entreno-title">Endomorfos</div>
    <div className="card-entreno-content">
      <img src={imgEndomorfo} alt="Endomorfo" onClick={infoEndomorfo}/>
    </div>
  </div>
</div>

</div>

{isModalOpen && (
        <ModalComponent
          isOpen={isModalOpen}
          closeModal={closeModal}
          // imageSrc={imageSrc}
          description={ModalContent}
         >
          {ModalContent} 
        </ModalComponent>
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
