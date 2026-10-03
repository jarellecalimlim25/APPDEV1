const numbers = [5, 4, 3];
const newNumbers = [...numbers, 2, 1];

console.log("Original numbers:", numbers);
console.log("New numbers:", newNumbers);

const user = {
    name: "Yna",
    age: 35
};

const newUser = {
    ...user,
    hobby: "Reading Wattpad stories"
};

console.log("New user:", newUser);

function sum(...args) {
    return args.reduce((total, number) => total + number, 0);
}

console.log("Sum:", sum(3, 2, 1, 4));