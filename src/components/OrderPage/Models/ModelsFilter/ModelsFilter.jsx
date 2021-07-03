import React from 'react'
import './ModelsFilter.scss'

export const ModelsFilter = () => {
    return (
        <ul className='models-filter'>
            <li className='models-filter__item'>Все модели</li>
            <li className='models-filter__item'>Эконом</li>
            <li className='models-filter__item'>Премиум</li>
        </ul>
    )
}