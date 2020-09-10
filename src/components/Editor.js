const React = require("react");

// TODO - This file will be responsible for parsing the layout files from the engine layer
// The state needs to be read and built as jsx internally within the editor object and then returned with render

class Editor extends React.component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="editor">
            
        </div>);
    }
}

module.exports = Editor;