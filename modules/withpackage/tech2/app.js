let result = require("./alpha/a.js");
let output = require("tech2/num/one");
console.log(result);
console.log(output);

let hello = require('./hello/world.js');
hello.greeting();

const calculator = require("tech2/num/calculator");
const cal = new calculator();
console.log(cal.sum(2,3));

