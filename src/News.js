import React from 'react'
import { Link } from "react-router-dom";
import NewsCard from './NewsCard'
import './News.css'


function News() {
    return (
        <div className="news">

            <div className="news_header">
                <h1>Noticias</h1>
                <p>Está Aquí: <Link className="news_link" to="/">Inicio / </Link> <Link className="news_link" to="/noticias">Noticias / </Link> Sala De Aparatos - Reapertura! </p>
           </div>

            <div className="news_content">
                <NewsCard className="news_content_card" image="https://www.clubbps.com.uy/media/k2/items/cache/ef8bd3de49a270d49d40baf602fbfad5_M.jpg"
                tittle="Hacete socio x2"
                date="31/05/2021"
                description="Tenemos un plan para vos Plan 2 amigos: Ninguno paga matrícula y los dos tienen pase libre desde el primer día. Costo de la cuota: $ 2.460." />

                <NewsCard className="news_content_card" image="https://www.clubbps.com.uy/media/k2/items/cache/665e3353c5a0a1298b58f0408e39e998_M.jpg"
                tittle="Hacete socio x3"
                date="31/05/2021"
                description="Tenemos un plan para vos Plan 3 amigos: Ninguno paga matrícula, uno tiene el primer mes gratis y los tres tienen pase libre desde el primer día. Costo de la cuota: $ 2.460." />
            </div>

            <div className="news_grid">

                <div className="news_grid_item">
                    <NewsCard className="news_content_card" image="https://www.clubbps.com.uy/media/k2/items/cache/3409e45349ec9f6b3397bfe10e87a1d0_M.jpg"
                    tittle="Hacete socio"
                    date="31/05/2021"
                    description="Tenemos un plan para vos Plan contado: pagas una anualidad (equivalente al valor de 10 mensualidades), no pagas matrícula ¡y tenés pase libre todo el año! Costo de la anualidad: $ 24.600." />
                </div>
               

                <div className="news_grid_item">
                    <NewsCard className="news_content_card" image="https://www.clubbps.com.uy/media/k2/items/cache/7e58113966c67085953dd45e2ed189c9_M.jpg"
                    tittle="¡Volvemos a partir del lunes 24!"
                    date="31/05/2021"
                    description="¡¡ Volvemos con las actividades presenciales !! Recordá agendarte, tenemos aforo restringido. Las actividades en sala y piscina libre (con fines de rehabilitación o terapéuticos), también requieren agenda. https://adelante.uy/webapp/paso2.php Podés ver los horarios en: https://clubbps.com.uy/actividades-y-horarios.html ¡Los esperamos!" />
                </div>

                <div className="news_grid_item">
                    <NewsCard className="news_content_card" image="https://www.clubbps.com.uy/media/k2/items/cache/935dbd09c0a7727e2143877810820513_M.jpg"
                    tittle="Hasta el 30 abril estaremos on line."
                    date="24/03/2021"
                    description="De acuerdo a las medidas adoptadas por el gobierno nacional, estaremos sólo online desde hoy hasta el 30 de abril. Consultá los horarios de las actividades en línea aquí: https://clubbps.com.uy/actividades-y-horarios.html Seguimos juntos, gracias por apoyarnos." />
                </div>

                <div className="news_grid_item">
                    <NewsCard className="news_content_card" image="https://www.clubbps.com.uy/media/k2/items/cache/621af29360685f88fae4c26f96ed9d8c_M.jpg"
                    tittle="¡Volvemos con todas las actividades!"
                    date="09/02/2021"
                    description="A partir del lunes 8 de febrero, quedan todas actividades habilitadas en el club." />
                </div>

            </div>
            
        </div>
    )
}

export default News
