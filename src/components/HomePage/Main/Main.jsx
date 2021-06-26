import React from 'react'
import { Header } from './header/Header'
import { Content } from './content/Content'
import { Footer } from './footer/Footer'
import './Main.scss'

export const Main = () => {
    return(
        <main className="main">
            <Header type='slider'/>
            <Content/>
            <Footer className='footer'/>
        </main>       
    )
}