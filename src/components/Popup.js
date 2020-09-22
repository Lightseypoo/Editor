const React = require("react");

class Popup extends React.component {
	constructor (props) {
		super(props);
		this.state = {
			hidden: props.hidden,
			content: props.children
		};
	}

	// TODO - maybe get rid of this? will we need it? make it toggle?
	hide () {
		this.setState({ hidden: true });
	}

	render () {
		return (
			<div className="popup" hidden={this.hidden}>
				<div className="titlebar drag" />
				{this.content}
			</div>
		);
	}
}
