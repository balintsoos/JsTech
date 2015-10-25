// main.js
var React = require('react');
var ReactDOM = require('react-dom');

class App extends React.Component {
	constructor(props) {
		super(porps)
		this.state = {
			titles
		}
	}
	render() {
		return (
			<div>
				<h1>Kódlista</h1>
				<div id="main">
				  <div id="list-container">
				    <div id="filter">
				      <form className="form-inline">
				        <div className="form-group">
				          <label htmlFor="text-filter">Filter</label>
				          <input type="text" className="form-control" id="text-filter" />
				        </div>
				      </form>
				    </div>
				    <div id="list">
				      <ul id="code-list" className="list-group">
				        <li className="list-group-item">cím1</li>
				        <li className="list-group-item">cím2</li>
				      </ul>
				    </div>
				  </div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('container')
);