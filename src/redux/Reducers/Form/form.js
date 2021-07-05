const defaultState = {
    city: '',
    point: '',
}

const reduce = 'FORM_';
const CHANGE_CITY = `${reduce}CHANGE_CITY`;
const CHANGE_POINT = `${reduce}CHANGE_POINT`

export const changeCity = (value) => {
    return {
        type: CHANGE_CITY,
        payload: value,
    }
} 

export const changePoint = (value) => {
    return {
        type: CHANGE_POINT,
        payload: value,
    }
}

export default (state = defaultState, {type, payload}) => {
    switch(type){
        case CHANGE_CITY: 
            return {...state, city: payload} 
        case CHANGE_POINT: 
            return {...state, point: payload}
        default:  
            return state
    }
}