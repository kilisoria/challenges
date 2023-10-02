
import { createBrowserHistory } from "history";
import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { routerMiddleware } from 'connected-react-router';
import rootReducer from "./rootReducer";

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer(history),
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunkMiddleware
      ),
    ),
  )

  return store;
}
