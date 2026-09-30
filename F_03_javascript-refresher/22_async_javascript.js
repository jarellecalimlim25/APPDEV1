function fetchStudentMock(callback) {
  setTimeout(() => {
    callback({
      name: "Phillip",
      age: 25,
      course: "BS Information System"
    });
  }, 1000);
}

fetchStudentMock((student) => {
  console.log("Got student:", student);
});


function fetchStudent() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Phillip",
        age: 25,
        course: "BS Information System"
      });
    }, 1000);
  });
}

async function showStudent() {
  try {
    const student = await fetchStudent();

    console.log("Student loaded:", student);
  } catch (error) {
    console.log("Failed to load student");
  }
}

showStudent();

function getAssignment(callback) {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => {
      callback(null, data);
    })
    .catch(error => {
      callback(error, null);
    });
}

function handleAssignment(error, data) {
  if (error) {
    console.error("Error fetching assignment:", error);
  } else {
    console.log("Fetched assignment:", data);
  }
}

getAssignment(handleAssignment);


function getTask() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json());
}

getTask()
  .then(task => console.log("Task:", task))
  .catch(error => console.error("Something went wrong:", error));


async function getTaskWithAsync() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  const data = await response.json();

  return data;
}

async function fetchTask() {
  try {
    const task = await getTaskWithAsync();

    console.log("Async task:", task);
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

fetchTask();

let studentName = "Dennis";
let studentAge = 25;
let studentCourse = "BS Information System";

setTimeout(() => {
  console.log("This message is printed after 2 seconds");
}, 2000);

console.log("Name:", studentName);
console.log("Age:", studentAge);
console.log("Course:", studentCourse);