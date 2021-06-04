import React from 'react';
import './Section.css';
import CardInfo from './CardInfo'
import CardAct from './CardAct'

function Section( {name, descripcion }) {

    console.log('NOMBRE == ',name);
    if(name==="Noticias"){
    return (
        <div className="section_info">
            
            <div className="section_header">
                {name}
            </div>

            <div className="section_info_card">

                <CardInfo tittle="¡Volvemos a partir del lunes 24!"
                description="¡¡ Volvemos con las actividades presenciales !! Recordá agendarte, tenemos aforo restringido.…"
                image="https://www.clubbps.com.uy/media/k2/items/cache/7e58113966c67085953dd45e2ed189c9_L.jpg" />
                <CardInfo tittle="Hasta el 30 abril estaremos on line."
                description="De acuerdo a las medidas adoptadas por el gobierno nacional, estaremos sólo…"
                image="https://www.clubbps.com.uy/media/k2/items/cache/935dbd09c0a7727e2143877810820513_L.jpg" />
                <CardInfo tittle="¡Volvemos con todas las actividades!"
                description="A partir del lunes 8 de febrero, quedan todas actividades habilitadas en…"
                image="https://www.clubbps.com.uy/media/k2/items/cache/621af29360685f88fae4c26f96ed9d8c_L.jpg" />
            </div>
            <div className="section_button">
                <button type="submit" >{descripcion}</button>    
            </div>
        </div>
    )} else {
        return (
            <div className="section_act">
            
                <div className="section_header">
                    {name}
                </div>

                <div className="section_act_card">
                    <CardAct tittle="Abdominales"
                    image="https://www.clubbps.com.uy/images/2019/09/29/abdominales.jpg" />

                    <CardAct tittle="Yoga"
                    image="https://www.clubbps.com.uy/images/2019/09/29/yoga-pilates.jpg" />

                    <CardAct tittle="Streching"
                    image="https://www.clubbps.com.uy/images/2019/09/29/steching.jpg" />
                    
                    <CardAct tittle="Piscina"
                    image="https://www.clubbps.com.uy/images/2019/09/29/piscina-libre.jpg" />

                    <CardAct tittle="Voleibol"
                    image="https://www.clubbps.com.uy/images/2019/09/29/voleibol.jpg" />

                    <CardAct tittle="Spinning"
                    image="https://www.clubbps.com.uy/images/2019/09/29/spinning.jpg" />

                    <CardAct tittle="Hidrogimnasia"
                    image="https://www.clubbps.com.uy/images/2019/09/29/hidro.jpg" />

                    <CardAct tittle="Baile"
                    image="https://www.clubbps.com.uy/images/2019/09/29/baile.jpg" />
                </div>
                <div className="section_button">
                    <button type="submit" >{descripcion}</button>    
                </div>
            </div>
         )
    }
}

export default Section
