const fs = require("fs");

module.exports = (path) => {
    fs.readFileSync(path + ".txt", (error, data) => {
        if (error) throw error;

        return data.toString();
    });
}

