// Imports
var readFilter = require ("./filters/read");
var capitalizeFilter = require("./filters/capitalize");
var reverseFilter = require("./filters/reverse");
var writeFilter = require("./filters/write");
const fs = require('fs')


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

function launch(filters)
{
    let filters = {"read" : ['test'], "capitalize": ['opuiiiii'], "reverse" : ['ouiidh fhcdsif dfcjio'], "write" : ['oui je texte', './output.txt'] }

    for (let filter in filters){
        switch (filter) {
            case 'read':
                readFilter(filters.read.toString());
                break;
            case 'capitalize': 
                capitalizeFilter(filters.capitalize.toString());
                break;
            case 'reverse': 
                reverseFilter(filters.reverse.toString());
                break;
            case 'write': 
                writeFilter(filters.write.shift(), filters.write[0]);
                break;
            default : 
                throw new Error('Aucune fonction ne correspond au filtre indiqué.')
        }
    };
}


launch()