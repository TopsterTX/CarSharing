import { CHOSE_CITY, CHOSE_POINT } from "../../Reducers/Geocode/geocode";

export const choseCity = (city) => {
    return {
        type: CHOSE_CITY,
        payload: city,
    }
}

export const chosePoint = (point) => {
    return {
        type: CHOSE_POINT,
        payload: point,
    }
}
