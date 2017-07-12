import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";

import { createStore } from 'redux';

const reducer = (state, action) => {

	switch(action.type){
		case 'INC':
			return state + action.payload;
			break;
		case 'DEC':
			return state - action.payload;
			break;
		default:
			return state;		
	}
};

const store = createStore(reducer, 0);

store.subscribe(() => {
	console.log("Store changed ", store.getState());

})

store.dispatch({type: 'INC', payload: 1});
store.dispatch({type: 'INC', payload: 2});
store.dispatch({type: 'INC', payload: 3});
store.dispatch({type: 'INC', payload: 4});
store.dispatch({type: 'INC', payload: 5});
store.dispatch({type: 'DEC', payload: 5});
store.dispatch({type: 'DEC', payload: 4});
store.dispatch({type: 'DEC', payload: 3});
store.dispatch({type: 'DEC', payload: 2});
store.dispatch({type: 'DEC', payload: 1});