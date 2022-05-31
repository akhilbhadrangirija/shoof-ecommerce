import { loginStart,loginSucess,loginFailure } from "./userRedux"
import {publicRequest} from '../requestMethods'



 const login = async(dispatch,user)=>{
    dispatch((loginStart()));
    try {
        const res =await publicRequest.post('/auth/login',user)
        dispatch((loginSucess(res.data)));
        
    } catch (error) {
        dispatch((loginFailure()));
        
    }
    
}