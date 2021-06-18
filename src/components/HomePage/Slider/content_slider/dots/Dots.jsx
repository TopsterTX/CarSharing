import React from 'react'
import './Dots.scss'

export const Dots = ({setValue, value, className, data}) => {
    return (
        <div className="dots">
            <div className={className}>
                {data.map((el, index) => {
                    return <span id={`slide-${el.id}`} key={index}></span>
                })}
            </div>
        </div>
    )
}