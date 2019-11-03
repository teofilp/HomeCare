const getNextId = (arr) => {
    return arr.length == 0 ? 1 : Math.max(...arr.map(data => data.id)) + 1;
}

export default getNextId;