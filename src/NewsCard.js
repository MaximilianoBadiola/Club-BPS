import React from 'react'

import './NewsCard.css'

function NewsCard({image, tittle, date, description}) {
    return (
        <div className="news_card">
                <div className="news_card_image">
                    <img src={image} alt="" />
                </div>

                <div className="news_card_info">
                    <h2>{tittle}</h2>
                    <p>{date}</p>

                    <p>{description}</p>
                </div>
        </div>
    )
}

export default NewsCard
