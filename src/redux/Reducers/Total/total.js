const defaultState = {
    isConfirmOrder: false,
}

const reduce = 'TOTAL_'
const CHANGE_CONFIRM_ORDER = `${reduce}CHANGE_CONFIRM_ORDER`

export const changeConfirmOrder = (bool) => {
    return {
        type: CHANGE_CONFIRM_ORDER,
        payload: bool,
    }
}

export default (state = defaultState, {type, payload}) => {
    switch(type){
        case CHANGE_CONFIRM_ORDER:
            return {...state, isConfirmOrder: payload}
        default:    
            return state
    }
}