import { combineReducers } from 'redux';
import cartReducer from "./cart_reducer";

//ROOTREDUCER
const rootReducer = combineReducers({
    cart: cartReducer
});

export default rootReducer;