import React from 'react'
import {Main} from './Main/Main'
import {Slider} from './Slider/Slider'
import './HomePage.scss'


export const HomePage = () => {
    return(
        <section className='home-page'>
            <Main/>
            <Slider/>
        </section>
    )
}