const rawName = " Janna Calimlim ";
const cleanName = rawName.trim();
const [firstName, lastName] = cleanName.split(" ");

console.log("First name:", firstName.toUpperCase());
console.log("Contains Calimlim", cleanName.includes("Calimlim"));
console.log("Fiest 6 character:", cleanName.slice(0, 6));
console.log(`Full name: ${firstName} ${lastName}`);

console.log("Parsed number:", parseInt("85px"));
console.log("Rounded number:", (18.5678).toFixed(2));

const result = "hello" / 2;
console.log("Invalid calculation:", result);
console.log("Is the result NaN?", Number.isNaN(result));