// Imports
var readFilter = require ("./filters/read");
var capitalizeFilter = require("./filters/capitalize");
var reverseFilter = require("./filters/reverse");
var writeFilter = require("./filters/write");
const fs = require('fs')

verification();

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

    let filters = {}

    //Bonne valeur  
    for (steps in configFilters.steps) {

        //vérification filter
        if(!configFilters.steps[steps].filter) {
            throw new Error('La paramètre filter renseigné est vide.')
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
    }

    //Permet de compléter l'objet filters avec les filtres, leurs paramètres si il y en a, dans l'ordre suivant l'attribut next
    let varNext = 1
    for (let i = 1; i <= Object.keys(configFilters.steps).length; i++) {
        filters[configFilters.steps[varNext].filter] = configFilters.steps[varNext].params
        varNext = configFilters.steps[varNext].next
    }

    for (let filter in filters){
        fs.existsSync(filter + ".js", (error) => {
            if (error) throw error;
        });
    };    
    
    displayFiltersAvailable(filters);
}

function displayFiltersAvailable(filters)
{
    console.log('Les filtres disponibles sont : ')
    for (let filter in filters){
        console.log('- ' + filter)
    }

    launch(filters);
}

function launch(filters)
{ 
    let readResult = '';
    let capitalizeResult = '';
    let reverseResult = '';

    for (let filter in filters){
        switch (filter) {
            case 'read':
                readResult = readFilter(filters.read.toString());
                break;
            case 'capitalize': 
                capitalizeResult = capitalizeFilter(readResult);
                break;
            case 'reverse': 
                reverseResult = reverseFilter(capitalizeResult);
                break;
            case 'write': 
                writeFilter(filters.write.shift(), filters.write[0]);
                break;
            default : 
                throw new Error('Aucune fonction ne correspond au filtre indiqué.')
        }
    };
}
