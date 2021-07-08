import React from 'react';
import './Info.scss';

export const Info = () => {
    return (
        <section className='total-page-info'>
            <div className="total-page-info__container">
                <span className='total-page-info__model'>Hyndai, i30N</span>
                <div className="total-page-info__number">
                    <span>К 761 НА 73</span>
                </div>
                <p className="total-page-info__fuel">
                    <span>Топливо </span>100%
                </p>
                <p className="total-page-info__date">
                    <span>Доступна с </span>12.06.2019 12:00
                </p>
            </div>
        </section>
    )
}