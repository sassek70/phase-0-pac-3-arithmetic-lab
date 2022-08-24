function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function increment(a) {
    return ++a;
}

function decrement(a) {
    return --a;
}

function makeInt(a) {
    a =  parseInt(a, 10);
    return a;
}

function preserveDecimal(a) {;
    return parseFloat(a);
}