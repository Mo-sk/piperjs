module.exports = (stringInput) => {

    if (typeof stringInput === 'string') {
        let inputArray = stringInput.split(' ').reverse();
        let inputString = inputArray.toString().replaceAll(',', ' ');
        return inputString
    } else {
        throw Error;
    }

}