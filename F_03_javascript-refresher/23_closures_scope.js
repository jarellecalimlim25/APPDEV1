if (true) {
  let studySubject = "JavaScript";

  console.log("Inside the block:", studySubject);
}

try {
  console.log(studySubject);
} catch (error) {
  console.log("studySubject is not defined outside the block");
}

function createStudyCounter() {
  let taskCount = 0;

  return function incrementTask() {
    taskCount++;
    return taskCount;
  };
}

const morningCounter = createStudyCounter();
const eveningCounter = createStudyCounter();

console.log("Morning tasks:", morningCounter());
console.log("Morning tasks:", morningCounter());
console.log("Evening tasks:", eveningCounter());
console.log("Morning tasks:", morningCounter());
console.log("Evening tasks:", eveningCounter());