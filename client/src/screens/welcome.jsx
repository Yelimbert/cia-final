import React from "react";
import '../styles/welcome.css';


const Welcome = () => {
  return (
    <div className="container">
      <div className="header-bar">
        <div className="buttons">
          <button className="button-login"> <a href="/login">Log in</a></button>
        </div>
      </div>
      <div className="page">
        <div className="bienvenido">
          <h1>Bienvenido!</h1>
        </div>
      </div>
      <div className="texto-bienvenida">
        <h1 className="bienvenido-text">Texto de bienvenida</h1>
        
        <p className="text">
          Bienvenido a su Sistema integral de procesos academicos.
          SIPA es la plataforma que eliminará sus dolores de cabeza,
          le permite manejar todos sus procesos academicos de una forma facil,
          intuitiva y eficiente. Nuestra plataforma le ofrece la posibilidad de
          conectarse desde cualquier lugar del mundo solamente requiriendo que usted posea conexión a internet.
          <br /><br />Posteriormente SIPA es capaz de adaptarse a gran parte de los procesos
          academicos realizados en todas las instituciones academicas a nivel nacional.
          <br /><br />De igual forma, el estudiante siempre será capaz de consultar informaciones claves de una forma rápida
          , como es el caso de su índice academico o consultar su horario academico, en cualquier momento.
        </p>
      </div>
    </div>

  );
}

export default Welcome;