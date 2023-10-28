import React, { useContext, useEffect } from 'react';
import Nav from '../Nav';
import { Contexto } from '../Context/Contexto';
import { useNavigate } from 'react-router-dom';



const Planes = () => {

  const { planSeleccionado, setPlanSeleccionado } = useContext(Contexto);
  const {prueba, setPrueba, plansele, setPlansele} = useContext(Contexto);
  const navigate = useNavigate();

  
  // Esta función manejará el clic en el botón y establecerá el plan seleccionado.
  const seleccionarPlan = (plan) => {
    setPlanSeleccionado(plan);
    // setPrueba("hola")
    // setPlansele("holaaaaaaaaaaaaa")
    navigate("/registro")

    // console.log("Plan seleccionado en Planes:", planSeleccionado);
  }

  // Use un efecto para observar cambios en planSeleccionado
  // console.log("valor: ",prueba)
  useEffect(() => {
    // console.log("Plan seleccionado en Planes:", planSeleccionado);
    // console.log("valor: ",prueba)
    // console.log("plan: ",plansele)
  }, [planSeleccionado]);

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
          <button className="cta-button" onClick={()=> seleccionarPlan('Plan Basico')}>¡Inscríbete ahora!</button>
        </div>
        <div className="plan">
          <h2 className="plan-title">Plan Avanzado</h2>
          <p className="plan-description">
            Acceso completo a nuestra plataforma, entrenamientos personalizados y asesoramiento nutricional.
          </p>
          <p className="plan-price">$19.99/mes</p>
          <button className="cta-button" onClick={()=> seleccionarPlan('Plan Avanzado')}>¡Inscríbete ahora!</button>
        </div>
        <div className="plan">
          <h2 className="plan-title">Plan Premium</h2>
          <p className="plan-description">
            Todos los beneficios del plan avanzado, además de sesiones de entrenamiento personalizadas y consultas
            individuales con nuestros expertos.
          </p>
          <p className="plan-price">$29.99/mes</p>
          <button className="cta-button" onClick={()=> seleccionarPlan('Plan Premium')}>¡Inscríbete ahora!</button>
        </div>
      </section>
      <footer className="footer">
        <p>© 2023 Wellington Crespo. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Planes;

