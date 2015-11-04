import React from 'react';
import FilterForm from './filterform';
import List from './list';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			titles: ['cim1', 'cim2'],
			filterText: ''
		};
	}
	handleChange(value) {
		this.setState({
			filterText: value
		});
	}
	getFilteredList() {
		return this.state.titles.filter(title => title.indexOf(this.state.filterText) > -1);
	}
	render() {
		return (
			<div>
				<h1>Kódlista</h1>
				<div id="main">
				  <div id="list-container">
				  
					<FilterForm 
						filterText={this.state.filterText} 
						handleChange={e => this.handleChange(e)}
					/>
					<List data={this.getFilteredList()} />
					
				  </div>
				</div>
			</div>
		);
	}
}

export default App;
