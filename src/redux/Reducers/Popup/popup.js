const defaultState = {
    isPopupActive: false,
}

const reduce = 'POPUP_';
const CHANGE_ACTIVE = `${reduce}CHANGE_ACTIVE`;

export const changePopupActive = (bool) => {
    return {
        type: CHANGE_ACTIVE,
        payload: bool,
    }
}

export default (state = defaultState, {type, payload}) => {
    switch(type){
        case CHANGE_ACTIVE:
            return {...state, isPopupActive: payload}
        default: 
            return state
    }
}