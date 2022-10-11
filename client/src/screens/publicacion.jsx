import React from "react";
import "../styles/stylePublicacion.css";

const PublicacionCalificacion = ({asignatura, id, estudiante, opcion}) => {

    return (
        <div className="main_contenedor">
            <div className="header">Publicacion de calificaciones</div>
            <div className="card-container">
                <div className="card">
                    <div className="search-bar">
                        <input type="search" className="search" placeholder="   Buscar"></input>
                        <h2>{asignatura}</h2>
                    </div>
                    <table className="content-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Calificacion</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{id}</td>
                                <td>{estudiante}</td>
                                <td><input type='number' className="nota"></input></td>
                                <td>
                                    <button className="login_button">Publicar</button>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                </div>
            </div>
            <div className="footer"></div>
        </div>
    );
}

export default PublicacionCalificacion;