import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import RootReducer from "./Redux/Reducer/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const myStore = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);
ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
