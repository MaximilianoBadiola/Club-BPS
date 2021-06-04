import React from 'react'
import Protocol from './Protocol';
import Section from './Section';

function Body() {
    return (
        <div className='home'>
            <Protocol />
            <Section name="Noticias" descripcion="Ver todas las noticias" />
            <Section name="Actividades" descripcion="Ver todas las actividades"/>
        </div>
    )
}

export default Body
