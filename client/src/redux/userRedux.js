import {createSlice} from "@reduxjs/toolkit";

// const iniialValue={name:"",username:"",oredrs:[]};

const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser:null,
        isFetching:false,
        error:false,
        
    },
    reducers:{
        loginStart:(state)=>{
            state.isFetching=true;

        },
        loginSucess:(state,action)=>{
            state.isFetching=false;
            state.currentUser=action.payload            
        },
        loginFailure:(state)=>{
            state.isFetching=false;
            state.error=true
        },
        logOut:(state)=>{
            state.currentUser=null;
        }
    },
})
export const {loginStart,loginSucess,loginFailure,logOut} = userSlice.actions;
export default userSlice.reducer;