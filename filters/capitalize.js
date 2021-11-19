module.exports = (input) => {
    console.log(input)
    if(typeof input != "string"){
        throw new Error('Input est du mauvais type.')
    }
    return input.toUpperCase();
    //return input.charAt(0).toUpperCase() + input.slice(1);
}