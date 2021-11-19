const fs = require("fs");

module.exports = (path) => {

    fs.existsSync(path + ".txt", (error) => {
        if (error) throw error;
    });

    const data = fs.readFileSync(path + '.txt', {encoding:'utf8', flag:'r'});

    if(data.length == 0){
        throw new Error('Le fichier fourni est vide.');
    }

    return data;
}