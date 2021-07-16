import { CHANGE_CITY, CHANGE_POINT } from "../../Reducers/Form/form"
import { CHOSE_ADDRESS } from "../../Reducers/Form/form"

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

export const choseAddress = (bool) => {
    return {
        type: CHOSE_ADDRESS,
        payload: bool,
    }
}