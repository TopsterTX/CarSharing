import React from 'react'
import { connect } from 'react-redux'
import { ModelsItem } from '../ModelsItem/ModelsItem'
import './ModelsList.scss'

const ModelsList = ({cars}) => {
    return (
        <ul className='models-list'>
            {cars.cars.map((el, index) => {
                return <ModelsItem price={el.price} model={el.model} img={el.img} key={index}/>
            })}
        </ul>
    )
}

export default connect(
    ({cars}) => ({cars})
)
(ModelsList)