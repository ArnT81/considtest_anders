import * as t from '../types';

export const setCart = (cart) => ({
    type: t.SET_CART,
    payload: cart
})