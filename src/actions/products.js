import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "../constants/actionTypes"
import axios from "axios";
export const getProducts=(page)=>async (dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING});
    try {
      
        const res=await axios.get(`https://nykaaa-mock-api.onrender.com/products?_limit=15&_page=${page}`);

        dispatch({type:GET_PRODUCTS_SUCCESS,payload:res.data});
    } catch (error) {
        dispatch({type:GET_PRODUCTS_ERROR,payload:error.message});
    }
}