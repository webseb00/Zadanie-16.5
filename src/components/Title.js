import React from 'react';

class Title extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="infoWrapper">
				<h1 className="appTitle">ToDo App - Webpack + React</h1>
				<p className="taskNumber">{this.props.data.length}</p>
			</div>
		)
	}
}

export default Title;