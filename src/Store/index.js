import { createStore } from "redux";
import { RootReducer } from "./Reducer";


const store = createStore(
  RootReducer,
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);

export default store;