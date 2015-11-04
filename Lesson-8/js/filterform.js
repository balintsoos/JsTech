import React from 'react';

class FilterForm extends React.Component {
	render() {
		return (
			<div id="filter">
			  <form className="form-inline">
				<div className="form-group">
				  <label htmlFor="text-filter">Filter</label>
				  <input type="text" className="form-control" id="text-filter" 
					defaultValue={this.props.filterText}
					onChange={() => this.props.handleChange(this.refs.filter.value)}
					ref="filter"
				  />
				</div>
			  </form>
			</div>
		);
	}
}

export default FilterForm;