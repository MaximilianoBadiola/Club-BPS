import React from 'react'
import './Institution.css'
import { Link } from "react-router-dom";

function Institution() {
    return (
        <div className="institution">

            <div className="institution_header">
                <h1>Institucional</h1>
                <p>Está Aquí: <Link className="institution_link" to="/">Inicio</Link> / Institucional </p>
            </div>

            <div className="institution_body">                

                <div className="institution_history">
                    <h2>Historia</h2>
                    <p>
                        Nuestra Institución se fundó el 8 de Setiembre de 1970, a iniciativa de un grupo de funcionarios de vigilancia del BPS, en una asamblea convocada por el Sr. Jacinto Espiga y otros compañeros, donde se designó una Comisión Provisoria integrada por:
           
                    <p><strong >Presidente: </strong>Jacinto Espiga</p>
                    <p><strong >Vice Presidente: </strong>José Criado</p>
                    <p><strong >Tesorero: </strong>Walter Nicolini</p>
                    <p><strong >Secretario: </strong>Dante Troncoso </p>
                    <p><strong >Secretario Actas: </strong>Jacinto Espiga</p>
                    <p><strong >Vocales: </strong>Luis N. Afonso, Francisco Camargo y Félix Gentile</p>
                    </p>
                </div>

                <div className="institution_present">
                    <h2>Actualidad</h2>
                    <p>
                        En la actualidad contamos con una infraestructura y servicios en permanente evolución. El edificio distribuye sus actividades en tres plantas, que albergan salas de aparatos, gimnasios, un polideportivo, una piscina medio olímpica (25 mt), un salón de fiestas y dos salones de eventos con parrilleros.
                    </p>
                    <p>
                        Nuestra comunidad comprende a cerca de 5000 socios y 100 empleados, entre profesores, técnicos y personal administrativo. Entre todos hacemos posible que la institución crezca y brinde servicios sociales y deportivos de calidad. Contamos además con diferentes convenios, con entidades privadas y públicas, que nos permite ampliar el abanico de servicios a nuestros socios.
                    </p>
                    <p>
                        Todos estos elementos se conjugan para promover una convivencia armónica entre socios, familiares y empleados, generando vínculos sanos de respeto y consideración. Nuestro principal objetivo es mejorar la calidad de todos los integrantes de esta gran familia.
                    </p>
                </div>

                <div className="institution_president">
                    <h2>Presidentes en el tiempo</h2>
                    <div className="presidents_info">
                        <p>Sr Jacinto Espiga</p>
                        <p>Setiembre 1970 - Diciembre 1977</p>
                    </div>

                    <div className="presidents_info">
                        <p>Sr. Nery Cabillón </p>   
                        <p>Diciembre 1977 - Diciembre 1983</p>
                        <p>Octubre 1987 - Diciembre 1990</p>
                        <p>Diciembre 1994 - Diciembre 1997</p>
                    </div>

                    <div className="presidents_info">
                        <p>Sr. Omar Di Bello</p>   
                        <p>Diciembre 1983 - Octubre 1987</p>
                    </div>

                    <div className="presidents_info">
                        <p>Sr. Roberto Saporiti</p>   
                        <p>Diciembre 2002 - Diciembre 2005</p>
                        <p>Diciembre 2005 - Diciembre 2008</p>
                    </div>

                    <div className="presidents_info">
                        <p>Sr. Jorge Duarte</p>   
                        <p>Diciembre 1990 - Diciembre 1994</p>
                        <p>Diciembre 1997 - Diciembre 2002</p>
                        <p>Diciembre 2008 - Diciembre 2018</p>
                    </div>

                    <div className="presidents_info">
                        <p>Lic. Marcelo Passadore</p>   
                        <p>Diciembre 2018 - Actualidad</p>
                    </div>

                </div>

                <div className="institution_goals">
                    <h2>Objetivos</h2>
                    <p>
                    Una de las primeras aspiraciones de esta nueva Comisión Directiva provisoria era tener una Sede Social y la otra una Colonia de Vacaciones, para que socios y familiares tuvieran un lugar donde pasar sus vacaciones.
                    </p>
                    <p>
                    Luego de un tiempo, se obtiene la tan esperada Personería Jurídica, el 29 de Abril de 1971.
                    </p>
                    <p>
                    Hoy podemos decir que los objetivos de nuestros fundadores están siendo cumplidos, pero todavía restan muchas cosas para realizar a favor de nuestros socios (a la fecha más de 5.500).
                    </p>
                    <p>
                    Nuestro Club es una Institución Social, Deportiva y Cultural, dedicada a mejorar la calidad de vida de sus socios y sus familias.
                    </p>
                    <p>
                    También comprometido con el fomento del deporte en un alto nivel de excelencia (hoy tenemos federado el volley femenino y masculino), en lo cultural crearemos la Bibliotecaque estará al servicio de sus socios, familiares y también colaboraremos con la zona y su comunidad.
                    </p>
                </div>

                <div className="_institution_namesReason">
                    <h2>¿Por qué nos llamamos así?</h2>
                    <p>El club lleva el nombre de BPS atento a que lo fundaron varios funcionarios de ese Organismo, pero a la vez es una entidad privada, gobernada por una Comisión Directiva de 11 miembros, que actúan en forma honoraria.</p>
                </div>
            </div>
        </div>
    )
}

export default Institution
