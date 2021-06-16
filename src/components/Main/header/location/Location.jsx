import React from 'react'
import './Location.scss'

export const Location = () => {
    return(
        <section className='location'>
            <img src="../../../../icons/location.svg" alt="123" className='location__icon'/>
            <span className='location__place'>Ульяновск</span>
        </section>
    )
}