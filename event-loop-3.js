/**
 * Last line of the file.
 * nextTick
 * Promise
 * Timer expired
 * setImmediate
 * File Reading CB
 * 2nd nextTick
 * 2nd setImmediate
 * 2nd timer
 */

// I was just having the confusion in 28th line code and 32th 
// so here at this time event loop is at pool phase 
// so instead going from starting like timer phase ,it will start executing from where 
// it is at this point of time,means first 32th callback function will be executed and then 
// 29th line callback function will be executed...


const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer expired"), 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
  setTimeout(() => console.log("2nd timer"), 0);

  process.nextTick(() => console.log("2nd nextTick"));

  setImmediate(() => console.log(" 2nd setImmediate"));

  console.log("File Reading CB");
});
process.nextTick(() => console.log("nextTick"));

console.log("Last line of the file.");