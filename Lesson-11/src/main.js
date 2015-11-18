import reducer from './reducers/';
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/app';

import { changeFilterText } from './actions/';
/*
console.log(initialState);
console.log(changeFilterText(initialState, 'alma'));
*/
const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('container')
);

// console.log(store);

// // Log the initial state
// console.log(store.getState())

// // Every time the state changes, log it
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

// // Dispatch some actions
// store.dispatch(changeFilterText('alma'));
// store.dispatch(changeFilterText('korte'));
// store.dispatch(changeFilterText('szilva'));

// // Stop listening to state updates
// unsubscribe()


