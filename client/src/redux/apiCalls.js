import { loginStart,loginSucess,loginFailure,registerSucess,registerFail } from "./userRedux"
import {publicRequest} from '../requestMethods'



export const login = async(dispatch,user)=>{
    console.log("Log in")

    dispatch((loginStart()));
    try {
        console.log("Log in")
        const res =await publicRequest.post('/auth/login',user)
        dispatch((loginSucess(res.data)));
        
    } catch (error) {
        dispatch((loginFailure()));
        
    }
    
}
export const register = async(dispatch,user)=>{
    console.log("register")
    console.log(user)


    try{
        const res =await publicRequest.post('/auth/register',user)
    dispatch((registerSucess(res.data)))



    }catch(error){
        dispatch((registerFail()));
    }
}