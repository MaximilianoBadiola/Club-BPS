import React from 'react';
import CardMat from '@material-ui/core/Card';

import './CardAct.css';

function CardAct({tittle, image}) {
    return (
        <CardMat className="card_act" >
            <img src={image} alt=""  />
            
            <div className="card_nom">
                <h3> {tittle} </h3>
            </div>
        </CardMat>
    )
}

export default CardAct
