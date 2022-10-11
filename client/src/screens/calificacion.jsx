import React from "react";
import "../styles/stylePublicacion.css";
import { useEffect, useState } from "react";
import Table from "./table";
import { useParams } from "react-router";

const Calificacion = () => {

    const [calificacion, setCalificacion] = useState([]);
    let body = useParams();
    console.log(body);
    const url = "/dashboard/" + body.ID_est;

    useEffect(()=>{
        const califica = async () => {
            const answer = await fetch("/calificacion", {
                method: "POST",
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body),
            })
            const answerJson = await answer.json()
            console.log(answerJson.message);
            setCalificacion(answerJson.message);
        }
      califica();
      console.log(calificacion)
  },[])

    return (
        <div className="main_contenedor">
            <div className="header">Calificaciones</div>
            <a href={url} style={{"textDecoration":"none", "color":"black"}}>Return to dashboard</a>
            <div className="card-container">
                <div className="card">
                    <div className="search-bar">
                        <input type="search" className="search" placeholder="   Buscar"></input>
                        <h2>Reportes</h2>
                    </div>
                    <table className="content-table">
                        <thead>
                            <tr>
                                <th>Asignatura</th>
                                <th>Calificacion</th>
                                <th>Letra</th>
                            </tr>
                        </thead>
                        <tbody>
                            {calificacion.map((answer) => {
                                let x = answer.calificacion_numerica;
                                if (x > 89) {
                                    x = "A";
                                } else if (x > 84 && x <90) {
                                    x = "B+";
                                } else if (x > 79 && x <85) {
                                    x = "B";
                                } else if (x > 74 && x <80) {
                                    x = "C+";
                                } else if (x >= 70 && x <75) {
                                    x = "C";
                                } else if (x >= 60 && x < 70){
                                    x = "D";
                                } else {
                                    x = "F";
                                }
                                return <Table
                                asignatura={answer.nombre_materia} nota={answer.calificacion_numerica}
                                letra={x}/>
                            })}
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                </div>
            </div>
            <div className="footer"></div>
        </div>
    );
}

export default Calificacion;