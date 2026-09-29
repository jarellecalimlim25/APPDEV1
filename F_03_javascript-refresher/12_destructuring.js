const person = {
    name: "Delilah",
    age: 14
};

const { name, age } = person;
console.log("Name:", name);
console.log("Age:", age);

const hobbies = [
    "Watching movies",
    "Doing physical activities",
    "Reading Wattpad stories"
];

const [hobby1, hobby2] = hobbies;
console.log("Hobby 1:", hobby1);
console.log("Hobby 2:", hobby2);

function printName({ name }) {
    console.log("Student name:", name);
}

printName(person);