import * as t from '../types';

const INITIAL_STATE = {
    products: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
    ],
    cart: [],
    currentItem: null
};


const cart = (state = INITIAL_STATE, action) => {



    switch (action.type) {
        case t.ADD_TO_CART:
            console.log(state.products);
            //Get the items data from the products array
            const item = state.products.find(prod => prod.id === action.payload.id)
            // Check if the item is already in cart
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)
            return {
                ...state,
                cart: inCart ? state.cart.map(item =>
                    item.id === action.payload.id
                        ? { ...item, qty: item.qty + 1 } : item
                ) : [...state.cart, { ...item, qty: 1 }]
            }
        default:
            return { state };
    }
}

export default cart;