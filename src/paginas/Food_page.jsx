import React, { useContext } from 'react'
import Nav from '../Nav'
import imgFood from '../img/food.jpg';
import imgFood2 from '../img/food2.jpg';
import imgEnsalada from '../img/ensalada.jpg';
import imgSalmon from '../img/salmon.jpg';
import imgSmoothie from '../img/smoothie.jpg';
import { useNavigate } from 'react-router-dom';
import ModalComponent from './ModalComponent';
import { useState } from 'react';

const Food_page = () => {

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

  const regresar = ()=>{
    navigate('/')
  }

  const receta1 =()=>{
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
      <b>Detalles de entrenamiento y alimentación:</b>
      Los ectomorfos tienden a tener dificultad para ganar peso y masa muscular. Por ello, deben enfocarse en entrenamiento de fuerza para aumentar la masa muscular y en una dieta específica para aumentar la ingesta calórica y proteica.
      Pueden beneficiarse de ejercicios de alta intensidad y menos cardio, ya que tienen un metabolismo más rápido.

    </p>
    <ul>
      <li><b>Entrenamiento de fuerza:</b> Prioriza el levantamiento de pesas y ejercicios de fuerza para estimular el crecimiento muscular.</li>
      <li><b>Descanso adecuado:</b> Asegúrate de dormir lo suficiente para permitir que el cuerpo se recupere y se repare.</li>
      <li><b>Alimentación equilibrada:</b> Consume una dieta rica en proteínas, carbohidratos y grasas saludables para proporcionar energía y construir masa muscular.</li>
      <li><b>Frecuencia en las comidas:</b> Realiza varias comidas pequeñas a lo largo del día para mantener un suministro constante de nutrientes.</li>
      <li><b>Consumo calórico:</b> Asegúrate de consumir suficientes calorías, ya que los Ectomorfos tienden a tener un metabolismo más acelerado.</li>
    </ul>
      </div>
    );
    openModal(content);
  }

  const receta2 =()=>{
    const content = (
      <div className='modal-guia'>
        <h2>Mesomorfo</h2>
        <p>Los mesomorfos suelen tener una constitución atlética con hombros 
            anchos y una proporción muscular. Estos individuos pueden ganar músculo con relativa
            facilidad y mantener bajos niveles de grasa.</p>
        <p><b>Detalles de entrenamiento y alimentación:</b> Los mesomorfos suelen tener una facilidad para
           ganar músculo y mantenerse delgados. Para ellos, es importante centrarse en un equilibrio 
           adecuado entre entrenamiento de fuerza y cardio para mantener la masa muscular y controlar la grasa.
          Deben centrarse en una dieta equilibrada, rica en proteínas y carbohidratos de calidad. Esto les proporcionará
           la energía necesaria para el entrenamiento y apoyará la construcción muscular.</p>
        <ul>
          <li><b>Entrenamiento equilibrado:</b> Mesomorfos pueden beneficiarse de una combinación de entrenamiento de fuerza y cardio.</li>
          <li><b>Dieta balanceada:</b> Consumir una dieta equilibrada y variada con un enfoque en proteínas magras y carbohidratos complejos.</li>
          <li><b>Enfoque en el desarrollo muscular:</b> Pueden concentrarse en ejercicios que desarrollen y mantengan su masa muscular.</li>
          <li><b>Variabilidad en el entrenamiento:</b> Mantener la variedad en las rutinas de ejercicios para evitar el estancamiento y permitir el crecimiento continuo del músculo.</li>
          <li><b>Descanso y recuperación:</b> Asegurarse de tener suficiente descanso entre sesiones de entrenamiento para permitir que los músculos se reparen y se fortalezcan.</li>
        </ul>
      </div>
    );
    openModal(content);
  }

  const receta3 =()=>{
    const content = (
      <div className='modal-guia'>
        <h2>Endomorfo</h2>
        <p>Los endomorfos tienden a tener una constitución más redonda y son propensos a ganar peso fácilmente.
           Tienen una estructura más ancha con un metabolismo más lento.</p>
        <p><b>Detalles de entrenamiento y alimentación:</b>
          Los endomorfos pueden tener dificultad para perder peso y ganar músculo con facilidad. Por ello, un enfoque en la dieta y el ejercicio es clave para mantener un peso saludable.
          Deben centrarse en ejercicios aeróbicos y de resistencia para controlar la grasa y aumentar el metabolismo.
          Mantener una dieta equilibrada con un control estricto de la ingesta de calorías y macronutrientes es esencial.</p>
        
        <ul>
          <li><b>Cardio y resistencia:</b> Enfocarse en ejercicios cardiovasculares para mantener el peso y la resistencia para tonificar el cuerpo.</li>
          <li><b>Control de la dieta:</b> Ser cuidadosos con la ingesta calórica y equilibrio de macronutrientes.</li>
          <li><b>Frecuencia de comidas y porciones:</b> Optar por comidas más pequeñas y regulares, controlando las porciones.</li>
          <li><b>Hidratación y fibra:</b> Consumir suficiente agua y alimentos ricos en fibra puede ayudar a mantener la sensación de saciedad, controlar el apetito y mejorar la digestión.</li>
          <li><b>nfoque en alimentos integrales:</b> Optar por alimentos integrales y nutritivos, evitando aquellos con altos niveles de azúcar y grasas no saludables.</li>
        </ul>
      </div>
    );
    openModal(content);
  }

 

  return (
    <div>
      {/* <header>
        <Nav />
      </header> */}
      <div className="food-container">
        <div className='food-info'>
        <h1>Alimentación Saludable</h1>
        <p>
          En esta sección, proporcionaremos información útil sobre alimentación saludable, tips
          nutricionales, y recetas recomendadas para mejorar tu bienestar.
        </p>
        </div>

        <div className="nutritional-tips">
          <h2>Plan de Alimentación</h2>
          <div className='nutritional-tips-content'>
          <img src={imgFood2} alt="Consejos Nutricionales" />
          <p>
        Nuestros planes de fitness incluyen asesoramiento nutricional personalizado para
        satisfacer las necesidades únicas de cada individuo. Estos planes no solo se centran
        en el entrenamiento, sino que también consideran la importancia de una dieta equilibrada
        para lograr resultados óptimos. Descubre cómo nuestros planes nutricionales están
        diseñados para ayudarte a alcanzar tus objetivos de bienestar y fitness.
      </p>
          </div>
        </div>

        <div class="recetas-section">
    <h2>Recetas Exclusivas</h2>

    <div class="recetas-container">
        <div class="receta">
            <img src={imgEnsalada} alt="Receta 1" />
            <h3>Ensalada Mediterránea</h3>
            <p>Una ensalada refrescante con sabores mediterráneos, que combina lechuga mixta,
               tomates cherry, pepino, aceitunas negras y queso feta, aderezada con una mezcla
               de aceite de oliva y vinagre balsámico.</p>
            <button className='cta-button' onClick={receta1}>Ver Receta</button>
        </div>

        <div class="receta">
            <img src={imgSmoothie} alt="Receta 2"/>
            <h3>Smoothie de Frutas Tropicales</h3>
            <p>Un batido suave y delicioso que mezcla plátano, mango, piña y leche de almendras (o yogurt),
              perfecto para un desayuno o refrigerio nutritivo y lleno de sabor.</p>
              <button className='cta-button' onClick={receta2}>Ver Receta</button>
        </div>
        <div class="receta">
            <img src={imgSalmon} alt="Receta 3"/>
            <h3>Salmón al Horno con Vegetales</h3>
            <p>Salmón horneado acompañado de una variedad de vegetales, como brócoli y zanahorias,
              rociados con aceite de oliva y sazonados con hierbas, lo que lo convierte en una opción
              saludable y deliciosa.</p>
              <button className='cta-button' onClick={receta3}>Ver Receta</button>
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
</div>

      </div>
    </div>
  );
}

export default Food_page
