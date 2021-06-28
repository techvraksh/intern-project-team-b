import thunk from 'redux-thunk';
import {applyMiddleware, createStore,compose,combineReducers} from 'redux';
import {
    productDetailsReducer,
    productListReducer,
  } from './reducers/productReducers';



const initialstate = {};
const reducer = combineReducers({
    productList : productListReducer, 
    productDetails: productDetailsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE___ || compose;

const store = createStore(reducer, initialstate,composeEnhancer(applyMiddleware(thunk)));

export default store;