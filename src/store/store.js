import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import candidateReducer from "./Candidates/CandidateReducer";

const store = createStore(candidateReducer, applyMiddleware(thunk));

export default store;