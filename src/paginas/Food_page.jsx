import React, { useContext } from 'react'
import Nav from '../Nav'
import { BiArrowBack } from 'react-icons/bi';
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
        <h2>Ensalada Mediterránea</h2>
    {/* <img src={imgEctomorfo} alt="Ectomorfo" /> */}
    
    <h4>Ingredientes</h4>
    <ul>
      <li>Lechuga mixta</li>
      <li>Tomates cherry</li>
      <li>Pepino</li>
      <li>Aceitunas negras</li>
      <li>Queso feta</li>
      <li>Aceite de oliva</li>
      <li>Vinagre balsámico</li>
    </ul>

    <h4>Procedimiento</h4>
    <ul>
      <li>Lava y corta la lechuga, los tomates cherry y el pepino.</li>
      <li>En un tazón grande, mezcla la lechuga, los tomates, el pepino y las aceitunas.</li>
      <li>Espolvorea el queso feta desmenuzado por encima de la ensalada.</li>
      <li>En un recipiente aparte, mezcla el aceite de oliva y el vinagre balsámico para hacer el aderezo.</li>
      <li>Rocía la ensalada con el aderezo justo antes de servir.</li>
    </ul>
      </div>
    );
    openModal(content);
  }

  const receta2 =()=>{
    const content = (
      <div className='modal-guia'>
        <h2>Smoothie de Frutas Tropicales</h2>
        <h4>Ingredientes</h4>
    <ul>
      <li>Plátano</li>
      <li>Mango</li>
      <li>Piña</li>
      <li>Leche de almendras (o yogurt)</li>
    </ul>

    <h4>Procedimiento</h4>
    <ul>
      <li>Corta las frutas en trozos.</li>
      <li>Coloca las frutas en una licuadora.</li>
      <li>Agrega la leche de almendras (o yogurt) a la licuadora.</li>
      <li>Mezcla hasta obtener una consistencia suave y homogénea.</li>
      <li>Sirve en un vaso y disfruta.</li>
    </ul>
      </div>
    );
    openModal(content);
  }

  const receta3 =()=>{
    const content = (
      <div className='modal-guia'>
        <h2>Salmón al Horno con Vegetales</h2>
        <h4>Ingredientes</h4>
    <ul>
      <li>Filetes de salmón</li>
      <li>Brócoli</li>
      <li>Zanahorias</li>
      <li>Aceite de oliva</li>
      <li>Sal y pimienta</li>
      <li>Hierbas frescas (tomillo, romero)</li>
    </ul>

    <h4>Procedimiento</h4>
    <ul>
      <li>Precalienta el horno a 200°C.</li>
      <li>En una bandeja para hornear, coloca los filetes de salmón y los vegetales.</li>
      <li>Rocía con aceite de oliva y sazona con sal, pimienta y hierbas frescas.</li>
      <li>Hornea durante 15-20 minutos o hasta que el salmón esté cocido y los vegetales estén tiernos.</li>
      
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
      <button className='icon-back' onClick={regresar}>
        <BiArrowBack></BiArrowBack>
        
        </button>
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
