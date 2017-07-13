export function changeUsername(){

	return {
		type: 'CHANGE_USERNAME',
		payload: 'iamoperand'
	}
}

export function changePassword(){

	return {
		type: 'CHANGE_PASS',
		payload: 'pass123'
	}
}

export function asyncChangeUsernameAndPassword(){

	return function(dispatch){
		dispatch({type: 'CHANGE_USERNAME', payload: 'thunkusername'});

		//do something async from any xhr request manager

		dispatch({type: 'CHANGE_PASS', payload: 'thunkpass'});
	
	}
}

export function errorFunction(){
	return {
		type: 'E',
		payload: 'Nothing here'
	}
}