import * as t from '../types';

export const addToCart = (itemID) => {
    return {
        type: t.ADD_TO_CART,
        payload: {
            id: itemID
        }
    }
}

export const removeFromCart = (itemID) => {
    return {
        type: t.REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    }
}

export const adjustQTY = (itemID, value) => {
    return {
        type: t.ADJUST_QUANTITY,
        payload: {
            id: itemID,
            qty: value
        }
    }
}

export const loadCurrentItem =(item)=>{
    return {
        type: t.LOAD_CURRENT_ITEM,
        payload: item
    }
}