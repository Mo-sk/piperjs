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

    let configFilters = require ("./config-filters.json");

    // Verification de la clef "steps"
    if(!configFilters.steps){
        throw new Error('La clef "steps" est manquante ou mal formatée.');
    }

    let filters = {

    }

    //Bonne valeur  
    for (steps in configFilters.steps) {

        //vérification filter
        if(!configFilters.steps[steps].filter) {
            throw new Error("je suis une erreur")
        }

        //vérification du nombre de paramètres
        if(Object.keys(configFilters.steps[steps]).length > 3){
            throw new Error("Fichier config-filters.json mal configuré (certains steps ont plus de 3 clés).");
        }
        
        //vérification du nom des attributs dans le cas ou la step contient plus que le simple attribut filter
        if(Object.keys(configFilters.steps[steps]).length > 1) {
            Object.keys(configFilters.steps[steps]).forEach(function(y) 
                { 
                    if (y != "filter" && y != "params" && y != "next") {
                        throw new Error("Un ou plusieurs attributs est mal nommé")
                    }
                }
            );
        }

        //console.log(configFilters.steps[steps].params)
        filters[configFilters.steps[steps].filter] = configFilters.steps[steps].params
    }
    
    return filters
}

verification()