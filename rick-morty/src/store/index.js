import { createStore, combineReducers,applyMiddleware} from "redux";
import {reducer} from "../reducers/character";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import logger from "redux-logger";

const initialState = {
	characterList: [],
	// character: {name: ''},
	character: {},
	episodes: [],
	
	pages:0,
	next:'',
	prev:null,

	create: {}
}



const store = createStore(reducer, initialState, applyMiddleware(promise,thunk,logger));

export default store
