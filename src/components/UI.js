const React = require("react");
const ReactDOM = require("react-dom");
const TopBar = require("./components/TopBar.js");
const Editor = require("./components/Editor.js");

class UI extends React.Component { // TODO - Determine if this needs to be an instance of a react object
    constructor(props) {
        super(props);
    }

    // React-native method. don't fully understand how setState and Render work yet
    render() {
        // TODO Fetch DOM from Component and put our wrapper jsx around it for rendering
        // TODO add wrapper html to this method
        return (
            <div id="wrapper"> // Small border for rendered components, can be made invisible
                <TopBar /> // UI menu buttons / Login panel. really need a ux designer
                <Editor />
            </div>
        );
    }
} // TODO Implement me!!!

module.exports = UI;