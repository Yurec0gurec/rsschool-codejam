module.exports = function sumOfOther(array = []) {
    const temp = [];
    const sum = array.reduce(function (numb, current) {
        return numb + current;
    }, 0);
    let tempSum = sum;
    for (let i = 0, leng = array.length; i < leng; i++) {
        const current = array[i];
        tempSum -= current;
        temp.push(tempSum);
        tempSum = sum;
    }
    return temp;
};
