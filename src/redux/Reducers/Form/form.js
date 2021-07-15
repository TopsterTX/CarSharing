const defaultState = {
    city: '',
    point: '',
}

const reduce = 'FORM_';
export const CHANGE_CITY = `${reduce}CHANGE_CITY`;
export const CHANGE_POINT = `${reduce}CHANGE_POINT`

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