import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./redux/reducers/reducer";

export const createBooksStore = () => {
  const initialState = {};
  const middlewares = [thunk];
  const composedEnhancers = compose(applyMiddleware(...middlewares));

  return createStore(reducer, initialState, composedEnhancers);
};
const store = createBooksStore();

export default store;
