import { combineReducers } from 'redux'
import counterReducer from "./counter";
import allAnswers from './allAnswers';

const allreducers = combineReducers({
    counter: counterReducer,
    allans: allAnswers
}); 

export default allreducers;