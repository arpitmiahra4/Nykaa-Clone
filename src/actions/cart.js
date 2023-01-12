import axios from "axios";
import { ADDTO_CART_ERROR, ADDTO_CART_LOADING, ADDTO_CART_SUCCESS, GET_CART_ERROR, GET_CART_LOADING, GET_CART_SUCCESS } from "../constants/actionTypes"


export const addToCart=(data)=>async(dispatch)=>{
    dispatch({type:ADDTO_CART_LOADING});
    try {
        let res = await axios.post("https://nyka-json.onrender.com/carts",data);
        dispatch({type:ADDTO_CART_SUCCESS , payload:res.data});
    } catch (error) {
        dispatch({type:ADDTO_CART_ERROR, payload:error.message});
    }
}

export const getCartData=()=>async (dispatch)=>{
    dispatch({type:GET_CART_LOADING});
    try{
        let res=await axios.get("https://nyka-json.onrender.com/carts");
        dispatch({type:GET_CART_SUCCESS,payload:res.data})
    }
    catch(error){
        dispatch({type:GET_CART_ERROR, payload:error.message})
    }
}