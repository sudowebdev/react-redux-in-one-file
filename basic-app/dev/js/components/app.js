import React from 'react';

import { connect } from 'react-redux';

import { changeUsername } from '../actions/userActions';

@connect((store) => {
	return {
		user: store.user,
		tweet: store.tweet
	};
	
})

export default class App extends React.Component{
	
	

	render(){
		console.log(this.props);
		return null;
		
	}

	componentDidMount(){
		this.props.dispatch(changeUsername());
	}
}