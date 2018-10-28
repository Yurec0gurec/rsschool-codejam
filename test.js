const assert = require('assert');
Object.freeze(assert);

const sumOfOther = require('./src/SumOfOther.js');

//Функция для сравнения массивов
function Equal(arr1, arr2) {
    let length = arr1.length;
    if (!(length == arr2.length)) return false;
    for (let i = 0; i < length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}


describe('First_Task', () => {
    describe('Array', () => {
        it('1', () => {
            const ars = sumOfOther([5, 6, 7]);
            const res = Equal(ars, [13, 12, 11]);
            assert.equal(res, true);
        });
        it('2', () => {
            const ars = sumOfOther([1, 0, 0]);
            const res = Equal(ars, [0, '1', 1]);
            assert.equal(res, false);
        });
        it('3', () => {
            const ars = sumOfOther([0, 1, 0]);
            const res = Equal(ars, [1, 0, 1]);
            assert.equal(res, true);
        });
        it('4', () => {
            const ars = sumOfOther([5, 0, 10]);
            const res = Equal(ars, [10, 15, 5]);
            assert.equal(res, true);
        });
        it('5', () => {
            const ars = sumOfOther([100, 200, 1000]);
            const res = Equal(ars, [1200, 1100, 300]);
            assert.equal(res, true);
        });
    });

});

