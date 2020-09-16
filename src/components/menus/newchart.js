const React = require("react");
const Engine = global.Engine || process.exit(1);

class NewChart extends React.component {
    constructor(props) {
        super(props);

        this.editorCache = props.editorCache;
        this.state = {
            audio: "",
            title: "",
            artist: "",
            author: "",
            tags: [],
            editor: "" // Selected editor key
        };

        this.switchEditor = this.switchEditor.bind(this);
        this.update = this.update.bind(this);
        this.updateEditor = this.updateEditor.bind(this);
        this.confirm = this.confirm.bind(this);
        this.cancel = this.cancel.bind(this);

        // Build Editor selector jsx - TODO make this method re-callable
        // TODO - Support loading a default editor by user preference
        this.editorJsx = <select value="_fallback" onChange={this.switchEditor}>
            {...((editors) => {
                let options = [];
                for (const editor of editors) { // TODO make fallback not-selectable
                    options.push(<option value={editor.id}>{editor.name}</option>);
                }
                return options;
            })(props.editorCache)}
        </select>;

        this.switchEditor({target:{value: "_fallback"}});
    }

    // Handle Form change event
    update(event) {
        let state = {}, value;
        switch(event.target.id) {
            case "audio":
                value = event.target.files[0];
                break;
            case "tags":
                value = event.target.value.split(",");
                value = value.map(v => v.trim());
                break;
            default:
                value = event.target.value;
        }
        state[event.target.id] = value;
        this.setState(state);
    }

    switchEditor(event) {
        this.setState({editor: event.target.value});
        // TODO - update editor setting JSX
    }

    updateEditor(event) {
        // TODO - call the update function of the selected editorCache entry or change the selected entry
    }

    // Confirm and submit form info
    confirm() {
        // TODO - take data model and send it to engine layer to spawn an editor and a chart
        engine.newChart();
    }

    cancel() {
        // TODO - Exit this menu, if embedded disable this
    }

    render() {
        return ( // TODO add chart type selector - TODO unhardcode the Editor settings
            <div class="vertical">
                <header>New Chart (alpha)</header>
                <input type="file" id="audio" onChange={this.update} /><br />
                <label>Title: <input type="text" id="title" onChange={this.update} /></label><br />
                <label>Artist: <input type="text" id="artist" onChange={this.update} /></label><br />
                <label>Author: <input type="text" id="author" onChange={this.update} /></label><br />
                <label>Tags: <textarea id="tags" onChange={this.update} /></label><br />
                <hr />
                <header>Editor Settings</header>
                <span>This is where you would select chart type. Any settings here currently do nothing.</span><br />
                <label>Keys: <input type="text" id="keys" value="4" onChange={this.updateEditor} /></label><br />
                <button id="confirm" onClick={this.confirm}><b>Confirm</b></button>
                <button id="cancel" onClick={this.cancel}>Cancel</button>
            </div>
        );
    }
}

module.exports = NewChart;