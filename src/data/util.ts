

export const getRandomTo = (length: number) => {
    return Math.floor(Math.random()*length);
}

export const getRandomIndexes = (arrayLength: number, count: number) => {
    const indexes: number[] = [];
    while(indexes.length < count){
        const i = Math.floor(Math.random() * arrayLength);
        if(indexes.indexOf(i) === -1) indexes.push(i);
    }
    return indexes;
}

export const getRandomElements = <T>(array: T[], count: number): T[] => {
    const indexes = getRandomIndexes(array.length, count);
    return indexes.map(it => array[it])
}
