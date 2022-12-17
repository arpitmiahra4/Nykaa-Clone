import { ADDTO_CART_ERROR, ADDTO_CART_LOADING, ADDTO_CART_SUCCESS } from "../constants/actionTypes"


const cartState={
    carts:[],
    loading:false,
    error:false
}

export const cartReducer=(state=cartState,{type,payload})=>{
    switch(type){
        case ADDTO_CART_LOADING:{
            return {
                ...state,
                loading:true,
                error:false
            }
        }
        case ADDTO_CART_SUCCESS:{
            return {
                ...state,
                loading:false,
                carts:[...state.carts,payload]
            }
        }
        case ADDTO_CART_ERROR:{
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