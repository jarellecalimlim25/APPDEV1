function greet(name) {
    return "Hello, " + name + "!!";
}

const square = (num) => {
    return num * num;
};

function calculator(j, k) {
    return {
        sum: j + k,
        product: j * k 
    };
}

console.log(greet("Zoey"));
console.log(square(16));
console.log(calculator(18, 25));