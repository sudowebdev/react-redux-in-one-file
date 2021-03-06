import React from 'react';

import { connect } from 'react-redux';

import { changeUsername } from '../actions/userActions';
import { bindActionCreators } from 'redux';

@connect((state) => { 
	//mapStateToProps(){}
	return {
		user: state.user,
		tweet: state.tweet
	};
	
}, (dispatch) => {
	//mapDispatchToProps(){}
	return bindActionCreators({changeUsername: changeUsername}, dispatch);
})


/*
Dumb Component alone
It is the connect decorator that makes it a smart component
*/
export default class App extends React.Component{
	


	render(){
		console.log(this.props);
		return (<div>{this.props.user.username}</div>);
		
	}

	componentDidMount(){
		this.props.changeUsername();
	}
}