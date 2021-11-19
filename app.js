// Imports
var readFilter = require ("./filters/read.js");
const fs = require('fs')

// Test import READ.JS
//console.log(readFilter('./test'));


//Test présence fichier config-filters.json
const path = './config-filters.json'

if(!fs.existsSync(path)){
    throw new Error('Fichier config-filters.json introuvable.');
}

var configFilters = require ("./config-filters.json");

//Test présence trois clés par index
for(steps in Object.keys(configFilters.steps)){
    //console.log(configFilters.steps.)
}
//console.log(configFilters)

myArray.find(x => x.id === '45').foo;