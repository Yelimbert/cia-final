import React from "react";
import '../styles/loggedPage.css';
import intecLogo from '../intec_logoT.png';

const UserLoggedPage = () => {
  
  return (
    <div className="contenedor-principal">
      <div className="contenedor-menu">
        <div className="menu1">
          <div className="logo-container">
            <img className="intec" src={intecLogo} alt=""/>
              <h3 className="encabezado">Sistema Integral de Procesos Academicos</h3>
          </div>
          <ul>
            <li className="menu-item" href="#"><i class="fa-solid fa-house"></i>Dashboard</li>
            <li className="menu-item desplegable" href="#"><i class="fa-solid fa-medal"></i>Procesos academicos
              <ul>
                <li className="menu-item-hijo" href="#"><i className="fa-solid fa-table"></i>Horario</li>
                <li className="menu-item-hijo" href="#"><i className="fa-solid fa-mouse"></i>Seleccion de asignaturas</li>
              </ul>
            </li>
            <li className="menu-item" href="#"><i className="fa-solid fa-chart-pie"></i>Reportes</li>
          </ul>
        </div>
      </div>
      <div className="pagina">
        <div className="bienvenido1">
          <h1>Bienvenido</h1>
        </div>
        
      </div>
      <div class="texto-bienvenida1">
          <h1 class="bienvenido-text1">Texto de bienvenida</h1>
          <div class="bienvenido-underbar1"></div>
          <p class="text">Bienvenido a su Sistema integral de procesos academicos. SIPA es la plataforma que eliminará sus dolores de cabeza, le permite manejar todos sus procesos academicos de una forma facil, intuitiva y eficiente. Nuestra plataforma le ofrece la posibilidad de conectarse desde cualquier lugar del mundo solamente requiriendo que usted posea conexión a internet.<br/><br/>Posteriormente SIPA es capaz de adaptarse a gran parte de los procesos academicos realizados en todas las instituciones academicas a nivel nacional.<br/><br/>De igual forma, el estudiante siempre será capaz de consultar informaciones claves de una forma rápida, como es el caso de su índice academico o consultar su horario academico, en cualquier momento.</p>
        </div>
    </div>
  );
}

export default UserLoggedPage;