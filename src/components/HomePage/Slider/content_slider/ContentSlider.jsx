import React from 'react'
import './ContentSlider.scss'
import { Dots } from './dots/Dots'

export const ContentSlider = () => {
    return (
        <div className="slider-content">
            <div className="slider-content__container">
                <h2 className='slider-content__title'>Бесплатная парковка</h2>
                <p className='slider-content__text'>Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.</p>
                <button className="slider-content__button">Подробнее</button>
                <Dots/>
            </div>
            
        </div>
    )
}