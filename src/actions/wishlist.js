import axios from "axios";
import { ADDTO_WISHLIST_ERROR, ADDTO_WISHLIST_LOADING, ADDTO_WISHLIST_SUCCESS } from "../constants/actionTypes"


export const addToWishlist=(data)=>async(dispatch)=>{
    dispatch({type:ADDTO_WISHLIST_LOADING});
    try {
        let res = await axios.post("https://nyka-json.onrender.com/wishlists",data);
        dispatch({type:ADDTO_WISHLIST_SUCCESS , payload:res.data});
    } catch (error) {
        dispatch({type:ADDTO_WISHLIST_ERROR, payload:error.message});
    }
}