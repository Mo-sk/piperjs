module.exports = (stringInput) => {
    if (typeof stringInput == 'string') {
        let inputArray = stringInput.split(' ').reverse();
        let inputString = inputArray.toString();
        
        return inputString.replaceAll(',', ' ')
    } else {
        throw new Error('Une erreur de type est détecté en entrée.');
    }
}