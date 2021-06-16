import React from 'react'
import { Menu } from './menu/Menu'
import {Language} from './language/Language'
import './Aside.scss'

export const Aside = () => {
    return(
        <aside className='aside'>
            <div className="aside__container">
                <Menu className='burger__menu burger__menu--aside'/>
                <Language />
            </div>
        </aside>       
    )
}