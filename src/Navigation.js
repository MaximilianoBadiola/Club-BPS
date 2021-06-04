import React from 'react';
import './Navigation.css';
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div className="navigation">
            <Link to="/">Inicio</Link>
            <Link to="/institucional">Institucional</Link>
            <Link to="/actividades">Actividades y Horarios</Link>
            <Link to="/noticias">Noticias</Link>
            <Link to="/hacetesocio">Hacete Socio</Link>
            <Link to="/contacto">Contacto</Link>
        </div>
    )
}

export default Navigation
