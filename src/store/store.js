import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux"
import { productReducer } from "../reducers/products";
import thunk from "redux-thunk"
import { cartReducer } from "../reducers/cart";

export const rootReducer=combineReducers({
    productsManager:productReducer,
    cartsManager:cartReducer
});


const composer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose();

export const store=legacy_createStore(rootReducer,composer(applyMiddleware(thunk)));