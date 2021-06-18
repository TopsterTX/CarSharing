import React from 'react'
import {Slider} from '../HomePage/Slider/Slider'
import {Main} from '../HomePage/Main/Main'
import {Aside} from '../HomePage/Aside/Aside'
import { Order } from './Order/Order'

export const OrderPage = () => {
    return(
        <div className='page page--order'>
            <Order/>
        </div>
    )
}