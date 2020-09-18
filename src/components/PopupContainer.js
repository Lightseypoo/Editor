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

    static SpawnMenu(key, args) {
        if (!require("fs").existsSync(`./menus/${key}.js`))
            return null;
        return React.createElement(
            require(`./menus/${key}.js`),
            args // Props? may require reformatting
        );
    }

    static SpawnPopup(data) {
        // Data fields:
        // id: popup component id
        // Title: popup title bar string
        // Body: popup body html
        // style: popup body style
        // util: popup body util
        // callback: ?optional
    }

    render() {
        return (<div id="popups">
            {this.state.items.map(item => {
                return (<Popup>{item}</Popup>);
            })}
        </div>)
    }
}

module.exports = PopupContainer;