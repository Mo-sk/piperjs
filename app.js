// Imports
var readFilter = require ("./filters/read.js");
var configFilters = require ("./config-filters.json");

// Test import READ.JS
//console.log(readFilter('./test'));


function verification()
{
    // Verification de la clef "steps"
    if(!configFilters.steps){
        throw new Error('La clef "steps" est manquante ou mal formatée.');
    }

    // Vérification de la présence d'index
    if(Object.keys(configFilters.steps).length === 0){
        throw new Error('Aucune tâche n\'a été configurée');
    }
}