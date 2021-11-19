module.exports = (stringInput, filepath) => {
    var fs = require("fs")
    fs.writeFile(filepath, stringInput, (err) => {
        if (err) throw err;
    })
}
