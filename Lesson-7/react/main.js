// main.js
var React = require('react');
var ReactDOM = require('react-dom');

//var Hello = React.createElement('h1', null, 'Hello React!')

var Hello = React.createClass({
	getInitialState() {
		return {
			value: "alma"
		}
	},
	handleChange() {
		this.setState({
			value: this.refs.proba.value
		});
	},
	render() {
		return (
			<div>
				<h1>Hello {this.props.name}</h1>
				<input 
					type="text" 
					value={this.state.value} 
					onChange={this.handleChange} 
					ref="proba" />
			</div>
			);
	},
});

//setInterval(function () {
	ReactDOM.render(
	  <Hello name={Date.now()}/>,
	  document.getElementById('container')
	);
//}, 1000);