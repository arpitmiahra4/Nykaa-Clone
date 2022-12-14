import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "../constants/actionTypes"

const productState={
     products:[],
     loading:false,
     error:false
}

export const productReducer=(state=productState,{type,payload})=>{
    switch(type){
        case GET_PRODUCTS_LOADING:{
            return {
                ...state,
                loading:true,
                error:false
            }
        }
        case GET_PRODUCTS_SUCCESS:{
            return {
                ...state,
                loading:false,
                products:payload,
                
            }
        }
        case GET_PRODUCTS_ERROR:{
            return {
                ...state,
                loading:false,
                error:payload
            }
        }
        default:{
            return state;
        }
    }
}