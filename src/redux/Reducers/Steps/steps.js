const defaultState = {
    steps: [
        {
            text: 'Местоположение',
            isFilled: false,
            isOpen: false,
            path: '/order/place',
        },
        {
            text: 'Модель',
            isFilled: false,
            isOpen: false,
            path: '/order/models',
        },
        {
            text: 'Дополнительно',
            isFilled: false,
            isOpen: false,
            path: '/order/option',
        },
        {
            text: 'Итого',
            isFilled: false,
            isOpen: false,
            path: '/order/total',
        },
    ]
}

const reduce = 'STEPS_';



export default (state = defaultState, {type, payload}) => {
    switch(type){
        default:
            return state; 
    }
}