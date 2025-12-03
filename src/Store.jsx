import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './Slices/CustomerSlice'
export const store = configureStore({
    devTools:false,
    reducer: {
        customers: customerReducer
    }
})