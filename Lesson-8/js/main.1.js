var React = require('react');
var ReactDOM = require('react-dom');

class FilterForm extends React.Component {
	handleChange() {
		console.log(this)
		this.props.handleChange(this.refs.filter.value)
	}
	render() {
		return (
			<div id="filter">
			  <form className="form-inline">
				<div className="form-group">
				  <label htmlFor="text-filter">Filter</label>
				  <input type="text" className="form-control" id="text-filter" 
					defaultValue={this.props.filterText}
					onChange={() => this.handleChange()}
					ref="filter"
				  />
				</div>
			  </form>
			</div>
		);
	}
}

class List extends React.Component {
	render() {
		// const arr = ['cim1', 'cim2'];
		
		const listItems = this.props.data.map(e => (<li key={e} className="list-group-item">{e}</li>));
		
		return (
			<div id="list">
			  <ul id="code-list" className="list-group">
				{listItems}
			  </ul>
			</div>
		);
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			titles: ['cim1', 'cim2'],
			filterText: 'alma'
		};
	}
	handleChange(value) {
		this.setState({
			filterText: value
		});
	}
	render() {
		return (
			<div>
				<h1>Kódlista</h1>
				<div id="main">
				  <div id="list-container">
				  
					<FilterForm 
						filterText={this.state.filterText} 
						handleChange={this.handleChange.bind(this)}
					/>
					<List data={this.state.titles} />
					
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