import React from 'react'
import { Link } from "react-router-dom";

import './Activities.css'

function Activities() {
    return (
        <div className="activities">

            <div className="activities_header">
                <h1>Actividades y horarios</h1>
                <p>Está Aquí: <Link className="activitie_link" to="/">Inicio</Link> / Actividades y horarios </p>
            </div>

            <div className="activitie_body">
                <img src="https://www.clubbps.com.uy/images/2021/05/22/lmv-mayo-2021.jpg" alt="" />
                <img src="https://www.clubbps.com.uy/images/2021/05/22/lmv-menores-mayo-2021.jpg" alt="" />
            </div>

            <div className="activities_schedule">
                <h2>Agenda web</h2>
                <p>Ingresá en el siguiente enlace para agendarte a las actividades</p>
                <a>http://adelante.uy/webapp/paso2.php</a>
                <p>Fecha de actualización: 22/05/2021</p>            
            </div>

        </div>
    )
}

export default Activities
