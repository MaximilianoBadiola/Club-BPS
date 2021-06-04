import React from 'react';
import CardMat from '@material-ui/core/Card';

import './CardInfo.css';

function CardInfo({tittle, description, image}) {
    return (
        <CardMat className="card" >
            <img src={image} alt=""  />
            
            <div className="card_info">
                <h2> {tittle} </h2>
                <p> {description} </p>
            </div>
        </CardMat>
    )
}

export default CardInfo
