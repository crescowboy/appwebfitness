import React, { useContext } from 'react'
import Nav from '../Nav'
import imgFood from '../img/food.jpg';
import imgFood2 from '../img/food2.jpg';
import imgEnsalada from '../img/ensalada.jpg';
import imgSalmon from '../img/salmon.jpg';
import imgSmoothie from '../img/smoothie.jpg';

const Food_page = () => {

  

 

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
            <a href="enlace_receta_1">Ver Receta</a>
        </div>

        <div class="receta">
            <img src={imgSmoothie} alt="Receta 2"/>
            <h3>Smoothie de Frutas Tropicales</h3>
            <p>Un batido suave y delicioso que mezcla plátano, mango, piña y leche de almendras (o yogurt),
              perfecto para un desayuno o refrigerio nutritivo y lleno de sabor.</p>
            <a href="enlace_receta_2">Ver Receta</a>
        </div>
        <div class="receta">
            <img src={imgSalmon} alt="Receta 3"/>
            <h3>Salmón al Horno con Vegetales</h3>
            <p>Salmón horneado acompañado de una variedad de vegetales, como brócoli y zanahorias,
              rociados con aceite de oliva y sazonados con hierbas, lo que lo convierte en una opción
              saludable y deliciosa.</p>
            <a href="enlace_receta_3">Ver Receta</a>
        </div>

    </div>
</div>

      </div>
    </div>
  );
}

export default Food_page
