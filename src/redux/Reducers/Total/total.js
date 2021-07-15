const defaultState = {
    isConfirmOrder: false,
}

const reduce = 'TOTAL_'
export const CHANGE_CONFIRM_ORDER = `${reduce}CHANGE_CONFIRM_ORDER`

export default (state = defaultState, {type, payload}) => {
    switch(type){
        case CHANGE_CONFIRM_ORDER:
            return {...state, isConfirmOrder: payload}
        default:    
            return state
    }
}