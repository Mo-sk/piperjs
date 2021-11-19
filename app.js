// Imports
var readFilter = require ("./filters/read.js");
const fs = require('fs')

// Test import READ.JS
//console.log(readFilter('./test'));


function verification()
{
    //Test présence fichier config-filters.json
    const path = './config-filters.json'

    if(!fs.existsSync(path)){
        throw new Error('Fichier config-filters.json introuvable.');
    }

    var configFilters = require ("./config-filters.json");

    // Verification de la clef "steps"
    if(!configFilters.steps){
        throw new Error('La clef "steps" est manquante ou mal formatée.');
    }

    // Vérification de la présence d'index
    if(Object.keys(configFilters.steps).length === 0){
        throw new Error('Aucune tâche n\'a été configurée');
    }
}

//Test présence trois clés par index
for(steps in Object.keys(configFilters.steps)){
    //console.log(configFilters.steps.)
}
//console.log(configFilters)

myArray.find(x => x.id === '45').foo;
