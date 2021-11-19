const fs = require("fs");

module.exports = (path) => {
    fs.readFile(path + ".txt", (error, data) => {
        if(error) {
            throw error;
        }
        // console.log(data.toString())
        return data.toString();
    });
}

// TEST //
// let path = './test'
// fs.readFile(path + ".txt", (error, data) => {
//     if(error) { 
//         throw error;
//     }
//     console.log(data.toString())
//     // return data.toString();
// });