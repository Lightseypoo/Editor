const React = require("react");
const Popup = require("./popup.js");
const Menu = require("./Menu.js");

class PopupContainer extends React.component {
    constructor(props) {
        super(props);
        this.state = {
            items: {}, // Popups and Menus (which extend popups)
            focused: ""
        }
    }

    // TODO - Add Popup
    addPopup(key, popup) {
        if (this.state.items[key])
            return false; // Already exists - TODO - focus instead
        this.setState({
            items: {...this.state.items, key: popup}
        });
    }
    // TODO - Remove Popup
    removePopup(key) {

    }

    focus(key) {
        this.setState({
            focused: this.state.items[key] && key ? key : ""
        });
    }

    render() {
        return (<div id="popups">
            {this.state.items}
        </div>)
    }
}

module.exports = PopupContainer;