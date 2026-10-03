const score = 65;
const result = score >= 70 ? "Pass" : "Fail";
console.log("Exam result:", result);

const number = 9;
console.log(
    number % 2 === 0 ? "The number is even" : "The number is odd"
);

const student = {
    name: "Roahn"
};

console.log("City:", student.address?.city);

const age = 0;
console.log("Using ||", age || 18);
console.log("Using ??", age ?? 18);