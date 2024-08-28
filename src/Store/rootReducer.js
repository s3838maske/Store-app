import { combineReducers } from "redux";
import CounterReducer from './Counter/counterReducer'


const rootReducers = combineReducers({
    counter: CounterReducer
});

export default rootReducers;
