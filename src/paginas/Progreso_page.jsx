import React from 'react';
import Nav from '../Nav';
import imgProgreso from '../img/gym4.jpg'

const Progreso_page = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>

      <div className="progreso-container">
      <div className="progreso-info1">
        <h1>¡Tu Progreso es Nuestro Objetivo!</h1>
        <p>
          En FitnessApp, nos comprometemos a brindarte herramientas para seguir y evaluar tu progreso.
          Con nuestro enfoque en el seguimiento personalizado, te ayudaremos a alcanzar tus metas y mejorar 
          tu bienestar general.
        </p>
        </div>

        {/* Sección de Seguimiento de Progreso */}
        <div className="progreso-info">
          <div>
          <h2>Seguimiento de Progreso</h2>
          <p>
            En FitnessApp, ofrecemos un seguimiento de progreso integral para cada cliente que contrate un plan.
            Nuestros entrenadores cualificados evalúan tu estado físico, establecen objetivos y diseñan un programa 
            de seguimiento personalizado para que puedas alcanzar tus metas de forma efectiva.
          </p>
          <p>
            Mediante herramientas de medición, como análisis de composición corporal, mediciones de rendimiento 
            y seguimiento de objetivos, te ayudamos a monitorear tu evolución y a ajustar tu programa de entrenamiento 
            para maximizar tus resultados.
          </p>
          </div>
          <div>
              <img src={imgProgreso} alt="" />
          </div>
          
        </div>

        

        {/* Otras secciones y contenido de la página... */}
        <div className="testimonial-section">
        <h2>Testimonios de Clientes</h2>
        <div className="testimonial">
          <p>"Excelente plataforma para lograr mis objetivos. ¡Muy recomendado!"</p>
          <p>María García</p>
        </div>
        <div className="testimonial">
          <p>"Increíble servicio, los entrenadores son muy atentos. ¡Gracias!"</p>
          <p>Carlos Ramírez</p>
        </div>
        <div className="testimonial">
          <p>"¡Increíble experiencia con FitnessApp! Los entrenamientos personalizados y la asesoría nutricional han cambiado por completo mi enfoque hacia el fitness. Estoy viendo resultados asombrosos y me siento más saludable que nunca. ¡Altamente recomendado!"</p>
          <p>David Castro</p>
        </div>
        {/* Puedes seguir agregando más testimonios */}
      </div>
      </div>
    </div>
  );
};

export default Progreso_page;
