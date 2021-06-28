import React from 'react'
import './Slide.scss'

export const Slide = ({img, title, text}) => {
    return (
        <section className='slide'>
            <img src={img} alt="" className='slide__image'/>
            <div className="slide__wrapper">
                <div className="slide__arrow slide__arrow--left" />
                <div className="slide__content">
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <button className='slide__button'>Подробнее</button>
                </div>
                <div className="slide__arrow slider__arrow--right" />
            </div>
        </section>
    )
}