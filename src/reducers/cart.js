import { ADDTO_CART_ERROR, ADDTO_CART_LOADING, ADDTO_CART_SUCCESS, GET_CART_ERROR, GET_CART_LOADING, GET_CART_SUCCESS, REMOVE_CART_ERROR, REMOVE_CART_LOADING, REMOVE_CART_SUCCESS } from "../constants/actionTypes"


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

        case GET_CART_LOADING:{
            return{
                ...state,
                loading:true
            }
        }
        case GET_CART_SUCCESS:{
            return{
                ...state,
                loading:false,
                carts:payload
            }
        }

        case GET_CART_ERROR:{
            return{
                ...state,
                error:true
            }
        }

        case REMOVE_CART_LOADING:{
            return{
                ...state,
                loading:true
            }
        }
        case REMOVE_CART_SUCCESS:{
            return {
                ...state,
                loading:false
            }
        }
        case REMOVE_CART_ERROR:{
            return{
                ...state,
                error:true
            }
        }
        default:{
            return state
        }
    }
}