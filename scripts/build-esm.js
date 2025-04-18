const fs = require("fs");
const path = require("path");

// Create the scripts directory if it doesn't exist
if (!fs.existsSync("scripts")) {
  fs.mkdirSync("scripts");
}

// Generate ESM version of the main entry point
const content = `import ElectrumClient from './src/electrum/client.js';
export default ElectrumClient;
`;

fs.writeFileSync("index.mjs", content);
console.log("ESM module created: index.mjs");
