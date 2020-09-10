const React = require("react");
const Engine = global.Engine || process.exit(1);
const NoEditor = require("./NoEditor.js");

// TODO - This file will be responsible for parsing the layout files from the engine layer
// The state needs to be read and built as jsx internally within the editor object and then returned with render

const state = {

};

const noeditor = <NoEditor />;

class Editor extends React.component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="editor">
            {state || noeditor}
        </div>);
    }

    load() {

    }
}

module.exports = Editor;