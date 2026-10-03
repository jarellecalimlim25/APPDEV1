const hobbies = ["Watching movies", "Doing physical activity", "Reading wattpad stories"];
hobbies.map(hobby => console.log("I enjoy " + hobby));

const student = {
    name: "Dennis",
    age: 25
};

const { name, age } = student;
console.log("Name:", name);
console.log("Age:", age);

const numbers = [5, 4, 3];
const newNumber = [...numbers, 2, 1];

console.log("New numbers:", newNumber);