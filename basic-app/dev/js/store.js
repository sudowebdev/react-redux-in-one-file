import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers';
/*			

	Middlewares: Intercepts every action 
	(lies between the stage when action gets fired and where the action gets served i.e. in the reducer)

*/
const errorHandler = (store) => (next) => (action) => {
	
	try{
		next(action);
	}catch(e){
		console.log("Error catched is: ", e);
	}
}

const middleware = applyMiddleware(logger(), thunk, errorHandler);

export default const store = createStore(reducers, middleware);