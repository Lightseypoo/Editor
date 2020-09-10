const React = require("react");
const Engine = global.Engine || process.exit(1);

class NewChart extends React.component {
    constructor(props) {
        super(props); // TODO extract editorcache from props
        this.state = {
            audio: "",
            title: "",
            artist: "",
            author: ""
        }
    }

    // Handle filechange event
    update(event) { // TODO - Update changed field in the data model
        // this.setState({
            // selectedFile: event.target.files[0]
    // });
    }

    // Confirm and submit form info
    confirm() {
        // TODO - take data model and send it to engine layer to spawn an editor and a chart
    }

    render() {
        return ( // TODO add chart type selector
            <div class="popup menu">
                <header>New Chart (alpha)</header>
                <input type="file" id="audio" onChange={this.file} /><br />
                <label for="title">Title: </label><input type="text" id="title" /><br />
                <label for="artist">Artist: </label><input type="text" id="artist" /><br />
                <label for="author">Author: </label><input type="text" id="author"/><br />
                <label for="tags">Tags: </label><input type="text" id="tags"/><br />
                <button id="confirm" onClick={this.confirm}><b>Confirm</b></button>
                <button id="cancel" onClick={this.cancel}>Cancel</button>
            </div>
        );
    }
}

module.exports = NewChart;