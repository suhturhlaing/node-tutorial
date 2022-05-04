const a = require('../alpha/aa.js');
let testingaa = require('testing/aa');
let One = require('testing/num/one');
let Two = require('testing/num/two');

module.exports = {
    greeting : () =>{
        console.log(a);
        // console.log(a.name);
        // console.log(testingaa.name);
        console.log("one" , One);
        console.log("two" , Two);
    },
    sayByeBye : () => {
        console.log('bye bye see you');
    }
    
}
