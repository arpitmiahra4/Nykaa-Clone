
import { ADDTO_WISHLIST_ERROR, ADDTO_WISHLIST_LOADING, ADDTO_WISHLIST_SUCCESS } from "../constants/actionTypes"


const wishListState={
    wishlists:[],
    loading:false,
    error:false
}

export const wishListReducer=(state=wishListState,{type,payload})=>{
    switch(type){
        case ADDTO_WISHLIST_LOADING:{
            return {
                ...state,
                loading:true,
                error:false
            }
        }
        case ADDTO_WISHLIST_SUCCESS:{
            return {
                ...state,
                loading:false,
                wishlists:[...state.wishlists,payload]
            }
        }
        case ADDTO_WISHLIST_ERROR:{
            return {
                ...state,
                loading:false,
                error:payload
            }
        }
        default:{
            return state
        }
    }
}