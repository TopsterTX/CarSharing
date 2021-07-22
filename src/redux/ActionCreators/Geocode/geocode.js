import { CREATE_PLACEMARK } from "../../Reducers/Geocode/geocode";

export const createPlacemark = (address, bounds) => {
    return {
        type: CREATE_PLACEMARK,
        payload: {
            address,
            bounds
        },
    }
}

