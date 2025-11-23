const path = require('path');


console.log('Directory name:', path.dirname(__filename));

console.log("File name :", path.basename(__filename));

console.log("Extension Name", path.extname(__filename));

console.log("File's exact location", path.resolve(__filename));


const joinPath = path.join("/user", "documents", "node", "projects");

console.log("Joined Path", joinPath);

const resolvePath = path.resolve("user", "documents", "node", "projects");

console.log("Resolve path:", resolvePath);

const normalizePath = path.normalize("/user/.documents/../node/projects");
console.log("normalizePath", normalizePath);






