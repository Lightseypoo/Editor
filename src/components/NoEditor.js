const React = require("react");
const Engine = global.Engine || process.exit(1);

// TODO - This will become a more interactive and animated menu-system later. right now its just buttons that serve popup menus though

class NoEditor extends React.component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div class="centered vertical">
            <button class="mainButton" onClick={Engine.newChart}>New Chart</button><br />
            <button class="mainButton" onClick={Engine.loadChart}>Load Chart</button><br />
            <button class="mainButton" onClick={Engine.importChart}>Import Chart</button>
        </div>);
    }
}

module.exports = NoEditor;