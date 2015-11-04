import React from 'react';

export default ({data}) => {
	const listItems = data.map(e => (<li key={e} className="list-group-item">{e}</li>));
	
	return (
		<div id="list">
		  <ul id="code-list" className="list-group">
			{listItems}
		  </ul>
		</div>
	);
};
