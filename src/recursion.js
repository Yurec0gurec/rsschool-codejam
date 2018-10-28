module.exports = function make(...arguments1) {
    function closure = (...arguments2) {
        if (typeof arguments2[0] === 'function' && arguments2.length === 1) {
            arguments1.reduce(arg[0])
        } else {
            make(...arguments1, ...arguments2);
        }
    }
    return closure;
};
