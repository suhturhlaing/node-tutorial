// / let hello = require('./hello/world.js');
// hello.greeting();
//
// const {greeting} = require('./hello/world.js');
// greeting();

// const {greeting,sayByeBye} = require('./hello/world.js');
// //greeting();
// sayByeBye();

// const {sayByeBye:bye} = require('./hello/world.js');
// bye();


// const Calculator = require('tech2/num/calculator');
// const calc = new Calculator();
// console.log(calc.sum(1,2));

// const Calculator = require('tech2/num/calculator');
// let tmp = (new Calculator()).sum(1,2);
// console.log(tmp);

// let tmp = (new (require('tech2/num/calculator'))()).sum(1,2);
// console.log(tmp);

// const sumResult = require('tech2/num/sum')(3,2);
// console.log(sumResult)


//-------------------test

// let hellofile = require('./hello/world.js');
// hellofile.greeting();

// const {greeting} = require('./hello/world.js')
// greeting();

// const {sayByeBye}  = require('./hello/world.js')
// sayByeBye();

// const {greeting, sayByeBye } = require('./hello/world.js');
// greeting();
// sayByeBye();

// const {sayByeBye : bye} = require('./hello/world.js');
// bye();


// const calculator = require('testing/num/calculator');
// const calc = new calculator();
// console.log(calc.sum(2,3));

// const Calculator = require('testing/num/calculator');
// const tmpcalc = (new Calculator()).sum(5,4);
// console.log(tmpcalc);


let tmp = (new (require('testing/num/calculator'))()).sum(1,2);
console.log(tmp);


const sumResult = require('testing/num/sum')(3,2)
console.log(sumResult);
