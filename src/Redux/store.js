import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import producttReducer from './productSlice'
const store = configureStore({
    reducer:{
        cart:cartReducer,
        product:producttReducer
    }
})
export default store;