import axios from "axios"
import { POST_REGISTER_REQUEST } from "../actionTypes/actionTypes";

export const register =(data)=> (dispatch) => {
    console.log(data)
    
  dispatch({type:POST_REGISTER_REQUEST})

  return axios.post("http://localhost:8080/users/register",data)
  
};

export const login=(data)=>(dispatch)=>{
  // console.log(data)
    
  dispatch({type:POST_REGISTER_REQUEST})

  return axios.post("http://localhost:8080/users/login",data)
}