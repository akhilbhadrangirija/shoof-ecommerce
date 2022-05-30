import {createSlice} from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        totalPrice:0,
        
    },
    reducers:{
        addProduct:(state,action)=>{
            state.quantity +=1;
            state.products.push(action.payload);
            state.totalPrice +=action.payload.price * action.payload.quantity;
        },
        addQuantity:(state,action)=>{
            state.products.map((product)=>{
                
                if(product._id===action.payload._id){
 
                    product.quantity+=action.payload.quantity;
                }
            });
            state.totalPrice +=action.payload.price * action.payload.quantity;
        }
    },
})
export const {addProduct,addQuantity} = cartSlice.actions;
export default cartSlice.reducer;