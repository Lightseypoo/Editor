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
import React from "react";

global.Engine = require("./engine.js")();
const Engine = global.Engine;

// React Elements
const UI = require("./components/UI.js");

// Render Layer
// const Renderer = spawnRenderer(Engine);

// Spawn UI Layer and bind to Engine
const uiWrapper = new UI_Wrapper();
Engine.bindCtx(uiWrapper); // This is nessecary

module.exports = uiWrapper;

class UI_Wrapper {
    constructor() {
        this.UI = <UI />;
    }

    popup() {

    }

    menu(id, ...args) {

    }

    buildUI() {
        return (
            <React.StrictMode>
                {this.UI}
            </React.StrictMode>
        );
    }
}
