const React = require("react");
const LoginPanel = require("./loginpanel.js");

class TopBar extends React.component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="bar" id="topbar">
        <div className="container">
          <button id="test0">test0</button>
          <button id="test1">test1</button>
          <button id="test2">test2</button>
        </div>
        <LoginPanel />
      </div>
    );
  }
}

module.exports = TopBar;
