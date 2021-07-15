import { CHANGE_CITY, CHANGE_POINT } from "../../Reducers/Form/form"

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
