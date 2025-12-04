import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const newCustomerSclice = createSlice({
  name: "newcustomer",
  initialState:initialState,
  reducers: {
    addNewCustomer(state, action) {
      state.push(action.payload)
    },
    DeleteFromTheList(state,action){
      const deleteIndexx = (action.payload)
      return state.filter((value,index) => index !== deleteIndexx)
    }
  }
})
export const {addNewCustomer, DeleteFromTheList} = newCustomerSclice.actions;
export default newCustomerSclice.reducer;