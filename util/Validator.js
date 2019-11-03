class Validator {
    isValid(arr, item, property) {
        let itemIndex = arr.findIndex(itm => itm[property] === item[property]);
        return itemIndex === -1;
    }
}

export default new Validator();