const students = [
  { name: "Dennis", grade: 85 },
  { name: "Mae", grade: 92 },
  { name: "Sarah", grade: 78 },
  { name: "Kevin", grade: 55 }
];

const passingStudents = students.filter(student => student.grade >= 60);

console.log(
  "Passing students:",
  passingStudents.map(student => student.name)
);

const studentFound = students.find(student => student.name === "Jarelle");
console.log("Student found:", studentFound);

const hasFailedStudent = students.some(student => student.grade < 60);
console.log("Is there a failed student?", hasFailedStudent);

const everyonePassed = students.every(student => student.grade >= 60);
console.log("Did everyone pass?", everyonePassed);

const rankedStudents = [...students].sort(
  (a, b) => b.grade - a.grade
);

console.log(
  "Student ranking:",
  rankedStudents.map(student => student.name)
);