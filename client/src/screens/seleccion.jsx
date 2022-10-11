import React from "react";
import intecLogo from '../intec_logoT.png';
import '../styles/seleccion.css';

const SeleccionAsignatura = ({codigo, docente, horario1, horario2}) => {
    return (
        <div className="selecc">
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
            <div className="main_contenedor1">
                <div className="header1">Seleccion de asignaturas</div>
                <div className="card-container">
                    <div className="card1">
                        <div className="search-bar1">
                            <input type="search" className="search1" placeholder="Buscar una materia"></input>
                            <h2>Seleccion</h2>
                        </div>
                        <table className="content-table">
                            <thead>
                                <tr>
                                    <th>Codigo y seccion</th>
                                    <th>Docente</th>
                                    <th>Horario 1</th>
                                    <th>Horario 2</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{codigo}</td>
                                    <td>{docente}</td>
                                    <td>{horario1}</td>
                                    <td>{horario2}</td>
                                    </tr>
                            </tbody>
                            <tfoot></tfoot>
                        </table>
                        <button className="confirmarbtn">Confirmar seleccion</button>
                    </div>
                </div>
                <div className="pie"></div>
            </div>
        </div>
    );
}

export default SeleccionAsignatura;