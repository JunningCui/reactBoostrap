import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers/reducer.js';
import './config';
// import App from './App';

registerServiceWorker();

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render((
	<Provider store={store}>
		<BrowserRouter>
			<App></App>
		</BrowserRouter>
	</Provider>
), document.getElementById('root'));