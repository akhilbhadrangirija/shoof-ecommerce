import {createSlice} from "@reduxjs/toolkit";



const userSlice = createSlice({
    name:"user",
    initialState:{
        
        
    },
    reducers:{
        addProduct:(state,action)=>{
            state.quantity +=1;
            state.products.push(action.payload);
            state.totalPrice +=action.payload.price * action.payload.quantity;
        },
        // addQuantity:(state,action)=>{
        //     state.products.quantity
        // }
    },
})
export const {addProduct} = userSlice.actions;
export default userSlice.reducer;