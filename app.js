// Imports
var readFilter = require ("./filters/read.js");
var qoa = require('qoa');

// Constantes
const {log} = console;
const input = {
    type: 'input',
    query: 'Write command : ',
    handle: 'command'
};


// Test import READ.JS
// let test = readFilter('./test');

// console.log(test)
 



console.clear();
console.log("################")
console.log("##   PiperJS  ##")
console.log("################")
console.log("")
console.log("List commands.")
console.log("ppft new -> Initiate new project")
console.log("ppft add_filter -> Create a new filter")
console.log("ppftdel_filter -> Delete an existing filter")
console.log("ppftadd_step -> Add a new step to the configuration file")
console.log("ppftdel_step -> Delete a step from configuration file")
console.log("")
// using the `prompt` async method
qoa.prompt([input]).then(log);
//=> { username: 'klaussinani' }

// using the `input` async method
qoa.input(input).then(log);
//=> { username: 'klaussinani' }
