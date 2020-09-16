/*
 * This module is the main controller for the editor's user interface
 * this module or modules loaded by this module need to process input
 * and fire events that can be caught during runtime on the frontend
 * by the engine-layer of the framework and passed to a concurrently
 * loaded editor object. This module will also handle importing and
 * embedding the renderer and it's html5 canvas into the editor's DOM
 */

/*
 * This module does not need to contain any page behavior for
 * the renderer layer. The ui module will interact with the renderer
 * by calling trivial events in the renderer (such as a viewport zoom)
 * or by receiving data from the engine layer and sending relevant
 * renderer updates to the layer for processing there.
 */

/*
 * More information on this module and the events it will need to
 * be able to handle will be provided in /docs/ui.md
 * - Layla A
 */

// TODO - Refactor this entire thing so its less of a nightmare to look at
// TODO - Further information to be included in /docs/ui.md

// Engine Layer
const Engine = global.Engine = require("./engine.js")();

// React
const React = require("react");
const Menu = require("./components/Menu.js");
const TopBar = require("./components/TopBar.js");
const Editor = require("./components/Editor.js");

// Render Layer
// const Renderer = spawnRenderer(Engine);

class UI extends React.component{
    constructor(props) {
        super(props);
    }

    popup() {

    }

    async menu(id, options, ...args) {
        // TODO - Create menu and then send it to popup container

        // This code might be useless
        return new Promise((resolve, reject) => {
            this.menu.serve(require(`./menus/${id}.js`), data => {
                if (data && data.err)
                    reject(data.err);
                else
                    resolve(data || null);
            }, ...args);
        }).catch(err => {
            console.error(err);
            return null;
        });
    }

    render() { // TODO - add canvas for Renderer
        return (
            <React.StrictMode>
                <div id="wrapper"> // Small border for rendered components, can be made invisible
                    <TopBar /> // UI menu buttons / Login panel. really need a ux designer
                    <PopupContainer />
                    <Editor />
                </div>
            </React.StrictMode>
        );
    }
}

module.exports = UI;
