// Spawn an Engine with dummy methods

module.exports = function () {
  const engine = require("./engine.js");
  for (const key of Object.keys(engine)) {
    engine[key] = function () {
      console.log(`Engine received ${key} from UI.`);
      return { code: 0 };
    };
  }
  return engine;
};
