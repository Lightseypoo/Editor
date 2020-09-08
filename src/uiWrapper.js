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

// React imports
import React from 'react';
import ReactDOM from 'react-dom';

// Component imports
import TopBar from './components/topbar.js'

// Low level imports
import spawnEngine from './engine.js';
import spawnRenderer from './renderer.js';

// Spawn other layers TODO - Make these respawnable
const Engine = spawnEngine();
const Renderer = spawnRenderer(Engine);

function spawnUI() {
    const editor = new UI(); // TODO - Figure out how tf the react object will spawn

    // Scope-privatized editor
    class UI_Wrapper {
        popup() {

        }

        menu(id, ...args) {

        }

        // React-native method. don't fully understand how setState and Render work yet
        render() {
            // TODO Fetch DOM from Component and put our wrapper jsx around it for rendering
            // TODO add wrapper html to this method
            return (
                <div id="wrapper"> // Small border for rendered components, can be made invisible
                    <TopBar /> // UI menu buttons / Login panel. really need a ux designer
                    <{editor} /> // this is the main editor UI
                </div>
            );
        }
    }

    // Spawn UI Layer and bind to Engine
    const ui = new UI_Wrapper();
    Engine.bindCtx(ui); // This is nessecary
    return ui;
}

class UI extends React.Component { // TODO - Determine if this needs to be an instance of a react object
    constructor(props) {
        super(props);
    }
} // TODO Implement me!!!

export default spawnUI // TODO - Export a React Class to be applied to index.js

// TODO - Further information to be included in /docs/ui.md
