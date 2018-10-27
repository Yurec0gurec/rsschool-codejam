const sumOfOther = array => {
    let temp = [];
    let sum = array.reduce(function (numb, current) {
        return numb + current;
    }, 0);
    for (let i = 0, leng = array.length; i < leng; i++) {
        let current = array[i];
        sum -= current;
        temp.push[sum];
    }
    return temp;
}
