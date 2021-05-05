export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
// export const UPDATE_CART_UNITS = "UPDATE_CART_UNITS";


export function addToCartAction({ id, name, price, mainImage, alternativeImages, description, units }) {
    return {
        type: ADD_TO_CART,
        payload: { id, name, price, mainImage, alternativeImages, description, units }
    }
}

export function removeFromCartAction({ id, name, price, mainImage, alternativeImages, description, units }) {
    return {
        type: REMOVE_FROM_CART,
        payload: { id, name, price, mainImage, alternativeImages, description, units }
    }
}

/* export function updateCartUnits({ id, units }) {
    return {
        type: UPDATE_CART_UNITS,
        payload: { id, units }
    }
} */