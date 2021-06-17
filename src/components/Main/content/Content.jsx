import React from 'react'
import './Content.scss'
import { Navigation } from '../navigation/Navigation'

export const Content = () => {
    return(
        <section className='content'>
            <div className="content__container">
                <h1 className='content__title'>
                    <span className='content__subtitle'>Каршеринг</span>
                    <span className='content__name'>Need for drive</span>
                </h1>
                <p className='content__text'>Поминутная аренда авто твоего города</p>
            </div>
            <button className='content__button'>Забронировать</button>
            <Navigation />
        </section>
    )
}