import React from 'react';
import FilterForm from '../components/filterform';
import List from '../components/list';
import { connect } from 'react-redux';
import { changeFilterText } from '../actions/';

class App extends React.Component {
	render() {
		const { dispatch } = this.props;
		// ES5: var dispatch = this.props.dispatch;
		
		const actions = {
			changeFilterText: (value => dispatch(changeFilterText(value)))
		};

		return (
			<div>
				<h1>Kódlista</h1>
				<div id="main">
				  <div id="list-container">
				  
					<FilterForm 
						filterText={this.props.filterText} 
						handleChange={actions.changeFilterText}
					/>
					<List data={this.props.titles} />
					
				  </div>
				</div>
			</div>
		);
	}
}

function filterTitles (titles, filterText) {
	return titles.filter(t => t.indexOf(filterText) > -1);
}

function select (state) {
	//return state;
	return {
		filterText: state.filterText,
		titles: filterTitles(state.titles, state.filterText),
	};
}

export default connect(select)(App);
