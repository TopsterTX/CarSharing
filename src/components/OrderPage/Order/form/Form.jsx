import React from 'react'

export const Form = () => {
    return(
        <form action="" className='order__form'>
            <div className="order__form-container">
                <span>Город</span>
                <input type="text" className="order__form-city" />
                <span>Пункт выдачи</span>
                <input type="text" className="order__form-out" placeholder='Начните вводить пункт ...'/>
            </div>
        </form>
    )
}