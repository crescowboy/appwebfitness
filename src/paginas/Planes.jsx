import React from 'react';
import Nav from '../Nav';

const Planes = () => {
  return (
    <div className="landing-page">
      <header>
        <Nav />
      </header>
      <section className="hero" id="planes">
        <div className="hero-content">
          <h1 className="hero-title">Planes de FitnessApp</h1>
          <p className="hero-description">
            Elige el plan que mejor se adapte a tus necesidades y empieza a alcanzar tus metas de fitness.
          </p>
        </div>
      </section>
      <section className="planes-section">
        <div className="plan">
          <h2 className="plan-title">Plan Básico</h2>
          <p className="plan-description">
            Acceso completo a nuestra plataforma de entrenamiento y seguimiento de progreso.
          </p>
          <p className="plan-price">$9.99/mes</p>
          <a href="/registro" className="cta-button">
            ¡Inscríbete ahora!
          </a>
        </div>
        <div className="plan">
          <h2 className="plan-title">Plan Avanzado</h2>
          <p className="plan-description">
            Acceso completo a nuestra plataforma, entrenamientos personalizados y asesoramiento nutricional.
          </p>
          <p className="plan-price">$19.99/mes</p>
          <a href="/registro" className="cta-button">
            ¡Inscríbete ahora!
          </a>
        </div>
        <div className="plan">
          <h2 className="plan-title">Plan Premium</h2>
          <p className="plan-description">
            Todos los beneficios del plan avanzado, además de sesiones de entrenamiento personalizadas y consultas
            individuales con nuestros expertos.
          </p>
          <p className="plan-price">$29.99/mes</p>
          <a href="/registro" className="cta-button">
            ¡Inscríbete ahora!
          </a>
        </div>
      </section>
      <footer className="footer">
        <p>© 2023 Wellington Crespo. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Planes;

