function calculateAverage(totalScore, numberOfSubjects) {
  if (numberOfSubjects === 0) {
    throw new Error("Number of subjects cannot be zero");
  }

  return totalScore / numberOfSubjects;
}

try {
  console.log(calculateAverage(450, 0));
} catch (error) {
  console.log("Something went wrong:", error.message);
}

const student = {
  name: "Janessa",
  age: 25,
  course: "BS Information System",
  isStudent: true
};

const jsonString = JSON.stringify(student);
console.log("JSON string:", jsonString);

const parsedStudent = JSON.parse(jsonString);

console.log("Student name:", parsedStudent.name);
console.log("Course:", parsedStudent.course);
console.log("JSON type:", typeof jsonString);
console.log("Parsed data type:", typeof parsedStudent);