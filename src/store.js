import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import counterReducer from "./services/reducers/counterReducer";
import todosReducer from "./services/reducers/todosReducer";

// Add multiple Reducer
const rootReducer = combineReducers({
  counterR: counterReducer,
  todosR: todosReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
