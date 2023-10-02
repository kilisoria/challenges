import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';
import planet from "./planet/reducer";

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  planet,
});

export default createRootReducer;

/*
const rootReducer = combineReducers({
  planet,
});

export default rootReducer;
*/


// reducers.js

/*
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  ... // rest of your reducers
})
export default createRootReducer
*/