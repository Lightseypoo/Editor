const React = require("react");
const Engine = global.Engine;

class LoginPanel extends React.component {
    constructor(props) {
        super(props);
        this.state = Engine.getLogin() || {
            username: "",
            picture: "",
            group: "",
            loggedIn: false
        };
    }

    login() {
        // TODO - Serve Login Menu
    }

    register() {
        // TODO - Serve Registration Menu
    }

    account() {
        // TODO - Serve Account Menu
    }

    render() {
        return ( this.state.loggedIn ?
            <div className="panel horizontal" onClick={this.account}>
                <img src={this.state["picture"]} hidden={!this.state["picture"]} alt=""/>
                <div className="vertical">
                    <span className={"username" + this.state["group"]}>{this.state["username"]}</span>
                    <span className="label">{this.state["group"]}</span>
                </div>
            </div>
        :
            <div className="vertical">
                <button id="login" onClick={this.login}>Login</button>
                <br/>
                <button id="register" onClick={this.register}>Register</button>
            </div>
        );
    }
}

module.exports = LoginPanel;