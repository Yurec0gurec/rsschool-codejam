const make = (...arguments1) => {
    const closure = (...arguments2) => {
        if (typeof arguments2[0] === 'function') {
            return arguments1.reduce(arguments2[0])
        };
        return make(...arguments1, ...arguments2);
    };
    return closure;
};

module.exports = make;
