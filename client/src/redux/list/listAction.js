import axios from "axios"
import { SUBMIT_LIST_ERROR, SUBMIT_LIST_LOADING, SUBMIT_LIST_SUCCESS } from "./listActionTypes";

export const submitFormData = (formData) => async (dispatch) => {
  // console.log(formData,"action")
  try {
    
    const token = localStorage.getItem("token") 
    dispatch({ type: SUBMIT_LIST_LOADING });

    const response = await axios.post("http://localhost:8080/list/add", formData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
console.log(response.data,"resdata")
    dispatch({ type: SUBMIT_LIST_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: SUBMIT_LIST_ERROR, payload: error.message });
  }
};

  