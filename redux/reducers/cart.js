import * as t from '../types';

const cart = (state = {
    cart: 'Your cart is empty'
}, action) => {
    switch (action.type) {
        case t.SET_CART:
            return {
                ...state, cart: action.payload
            }
        default:
            return { ...state };
    }
}

export default cart;