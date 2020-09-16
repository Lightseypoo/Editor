// Placeholder - rewrite in progress

// React Imports
import './index.css';
const React = require("react");
const ReactDOM = require("react-dom");
const UI = require("./UI.js");
// TODO - Look into ServiceWorker to see if it is a good fit for this project
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(<UI />, document.getElementById("root"));

/*
 * If you want your app to work offline and load faster, you can change
 * unregister() to register() below. Note this comes with some pitfalls.
 * Learn more about service workers: https://bit.ly/CRA-PWA
 */
//serviceWorker.unregister();
