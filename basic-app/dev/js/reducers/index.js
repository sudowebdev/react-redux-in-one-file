import { combineReducers } from 'redux';

import userReducer from './userReducer';
import tweetReducer from './tweetReducer';
/*			
	Reducers   		
	Reducers lie between the Actions and the Store.
*/
export default combineReducers({
	user: userReducer,
	tweet: tweetReducer
});