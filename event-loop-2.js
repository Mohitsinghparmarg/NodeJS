// a=100
// Last line of the file.
// process.nextTick
// Promise
// timer
// setImmediate
// File Reading CB

const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate"));

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
  console.log("File Reading CB");
});

setTimeout(() => console.log("Timer expired"), 0);

process.nextTick(() => console.log("process.nextTick"));

function printA() {
  console.log("a=", a);
}

printA(); // why it will run first because it's is sychronous code naa so...
console.log("Last line of the file.");