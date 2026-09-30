const values = [
    0,
    "",
    "JavaScript",
    null,
    undefined,
    [],
    {}
];

values.forEach((value) => {
    if (value) {
        console.log(value, "-> truthy");
    } else {
        console.log(value, "-> falsy");
    }
});

const studentName = "Daniel";
const studentId = "BSIS-202876";

const canAccess = studentName !== "" && studentId !== "";
console.log("Can access study materials:", canAccess);

const isInstructor = false;
const isStudent = true;
const canOpenMaterials = isInstructor || isStudent;

console.log("Can open study materials:", canOpenMaterials);
console.log("" || "Study materials available");
console.log(studentName && "Welcome to the study page!");
console.log("Cannot access:", !canAccess);