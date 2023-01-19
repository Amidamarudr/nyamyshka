import React from 'react';
import './CatCard.css';

const CatCard = (props) => {
    return (
    <>
    <div>
    <div className='cat-card__shadow-container'>
        <div className='cat-card'>
            <div className='cat-card__info'>
                <span className='cat-card__preheader'>Сказочное заморское яство</span>
                <span className='cat-card__header'>Нямушка</span>
                <span className='cat-card__name'>{props.name}</span>
                <span className='cat-card__quantity'>{props.quantity}</span>
                <span className='cat-card__prise'>{props.prise}</span>
                <span className='cat-card__customer'>{props.customer}</span>
            </div>
            <img src='../img/photo.svg'/>
        </div>
    </div>
    <div className='footer-text'>Чего сидишь? Порадуй котэ, купи.</div>
    </div>
    </>
    )
}

export default CatCard;