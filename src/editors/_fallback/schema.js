"use strict";

// TODO - Write Schema docs

module.exports = {
    timing: [1, 2], // BPM & Relative
    input: {
        types: [ // Index + 1 = value
            {
                name: "Note", // Visible name
                class: "note", // Class used in style and layout
            },
            {
                name: "Hold",
                class: "hold",
                params: { // Extra parameters defining function
                    next: [3]
                }
            },
            {
                name: "Release",
                class: "release",
                params: {
                    last: [2]
                }
            }
        ],
        structure: "1-18*", // 1-18 inputs all wildcarded (can be any type that abides type params)
    },
    descriptors: {
        scroll: [1, 2],
        pitch: 0
    },
    menus: {
        todo: true // kek TODO
    }
};