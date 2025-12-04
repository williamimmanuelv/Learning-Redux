import {configureStore} from '@reduxjs/toolkit';
import newCustomerSclice from './Slices/NewSclices'

export const NewStore = configureStore({
    devTools:true,
    reducer:{
        customerss:newCustomerSclice

    }
})