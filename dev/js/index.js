import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";

import { combineReducers, createStore } from 'redux';


const userReducer = (state = {}, action) => {
	switch(action.type){


		case 'CHANGE_USERNAME': {
			state.username = action.payload;
			break;
		}
		case 'CHANGE_PASS': {
			state.pass = action.payload;
			break;
		}
	}

	return state;
}

const tweetReducer = (state=[], action) => {
	return state;
}

const reducers = combineReducers({
	user: userReducer,
	tweet: tweetReducer
});

const store = createStore(reducers);

store.subscribe(() => {
	console.log("Store changed ", store.getState());

})

store.dispatch({type: 'CHANGE_USERNAME', payload: 'iamoperand'});
store.dispatch({type: 'CHANGE_PASS', payload: 'pass123'});
