import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";

import { combineReducers, createStore, applyMiddleware } from 'redux';

/*			Reducers   		*/
const userReducer = (state = {}, action) => {
	switch(action.type){


		case 'CHANGE_USERNAME': {
			state = {...state, username: action.payload};
			break;
		}
		case 'CHANGE_PASS': {
			state = {...state, pass: action.payload};
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



/*			Middlewares	 		*/
const logger = (store) => (next) => (action) => {
	console.log("action fired: ", action);
	action.type = 'CHANGE_PASS';
	next(action);
};


const middleware = applyMiddleware(logger);

const store = createStore(reducers, middleware);



store.subscribe(() => {
	console.log("Store changed ", store.getState());

})

store.dispatch({type: 'CHANGE_USERNAME', payload: 'iamoperand'});
store.dispatch({type: 'CHANGE_PASS', payload: 'pass123'});
