import { combineReducers } from 'redux';

/*			
	Reducers   		
	Reducers lie between the Actions and the Store.
*/
export default const reducers = combineReducers({
	user: userReducer,
	tweet: tweetReducer
});