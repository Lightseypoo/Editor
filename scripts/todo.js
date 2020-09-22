"use strict";

const fs = require("fs");
const ignore = ["node_modules", ".github", ".git", ".idea", "assets", "build"];
let out = []; let pending = 0;
console.log("Generating TODO summary for Project.");
fs.readdir("./", traverse.bind({ prev: "." }));

function traverse (_, items) {
	let path;
	for (const item of items) {
		if (ignore.indexOf(item) > -1) { continue; }
		path = `${this.prev}/${item}`;
		if (fs.lstatSync(path).isDirectory()) { fs.readdir(path, traverse.bind({ prev: `${this.prev}/${item}` })); } else if (path.endsWith(".js")) {
			pending++;
			fs.readFile(path, processFile.bind({ path }));
		} else { console.log(`Skipping ${path}`); }
	}
}

function processFile (_, file) {
	const todo = []; let i = 0;
	for (const line of file.toString().split("\n")) {
		if (line.includes("TODO")) { todo.push([this.path, i, line.trim()].join(" - ")); }
		i++;
	}
	out = out.concat(todo);
	console.log(`Read ${todo.length} entries from ${this.path}`);
	if (--pending === 0) { finish(out); }
}

function finish (todo) {
	console.log(`Finished TODO aggregation with ${todo.length} results.`);
	fs.writeFile("./docs/todo.txt", todo.sort().join("\n"), () => process.exit());
}
