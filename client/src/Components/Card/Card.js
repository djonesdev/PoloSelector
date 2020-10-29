import React from 'react'

import './Card.scss'

function Card({children, className}) {
    return (
        <div className={`c-card ${className}`}>
        <div className='c-card__top-border' />
            {children}
        </div>
    )
}

export default Card
