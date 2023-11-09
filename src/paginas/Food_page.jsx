import React, { useContext } from 'react'
import Nav from '../Nav'
import imgFood from '../img/food.jpg';

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
          <h2>Consejos Nutricionales</h2>
          <div className='nutritional-tips-content'>
          <img src={imgFood} alt="Consejos Nutricionales" />
          <ul>
            <li>Consumir una variedad de frutas y verduras diariamente.</li>
            <li>Controlar las porciones de comida para mantener un peso saludable.</li>
            <li>Limitar la ingesta de azúcares refinados y alimentos procesados.</li>
            <li>Beber suficiente agua durante el día.</li>
          </ul>
          </div>
        </div>

        <div className="recommended-recipes">
          <h2>Recetas Recomendadas</h2>
          <p>Aquí puedes compartir recetas saludables y sabrosas. Por ejemplo:</p>
          <div className="recipe-card">
            <img src={imgFood} alt="Nombre de la Receta" />
            <h3>Nombre de la Receta</h3>
            <p>Ingredientes:</p>
            <ul>
              <li>Ingrediente 1</li>
              <li>Ingrediente 2</li>
              <li>Ingrediente 3</li>
              {/* Agregar más ingredientes según la receta */}
            </ul>
            <p>Procedimiento:</p>
            <p>Paso 1: Describe el primer paso.</p>
            <p>Paso 2: Describe el segundo paso.</p>
            {/* Agregar más pasos según la receta */}
          </div>
          {/* Agregar más cards de recetas */}
        </div>
      </div>
    </div>
  );
}

export default Food_page
