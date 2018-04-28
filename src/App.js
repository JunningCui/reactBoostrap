import { Component } from 'react';
// import { Route } from 'react-router-dom';

import Login from './container/Login';
import Register from './container/Register';


class App extends Component {
	render() {
		return (
			<div className="App">
				<Route path="/register" component={Register}></Route>
				<Route path="/login" component={Login}></Route>
			</div>
		);
	}
}

export default App;
