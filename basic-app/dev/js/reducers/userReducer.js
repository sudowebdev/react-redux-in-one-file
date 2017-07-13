/*			
	Reducers   		
	Reducers lie between the Actions and the Store.
*/
export default const userReducer = (state = {}, action) => {
	switch(action.type){


		case 'CHANGE_USERNAME': {
			state = {...state, username: action.payload};
			break;
		}
		case 'CHANGE_PASS': {
			state = {...state, pass: action.payload};
			break;
		}
		case 'E': {
			throw new Error('Errorrrrr!!!');
			break;
		}
	}

	return state;
}
