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
        },
        clearCart:(state)=>{
            state.products=[];
            state.quantity=0;
            state.totalPrice=0
        }
    },
})
export const {addProduct,addQuantity,clearCart} = cartSlice.actions;
export default cartSlice.reducer;