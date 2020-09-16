const React = require("react");

class Menu extends React.component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: props.hidden,
            content: null
        };
    }

    serve(component, callback, ...args) {
        this.setState({
            content: React.createElement(component, ...args),
            hidden: false
        });
        // TODO - write an exit condition for this that cna be signaled from the content object
    }

    render() {
        return (
            <div className="popup menu" hidden={this.hidden}>
                {this.content}
            </div>
        );
    }
}