import React, { Component } from 'react';
import './App.css';
import UserList from './components/UserList';

class App extends Component {
	render() {
		return (
			<div className="App">
				<UserList />
			</div>
		);
	}
}

export default App;
