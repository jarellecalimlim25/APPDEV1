let score = 65;

if (score >= 90) {
    console.log("A - Excellent!!!");
} else if (score >= 80) {
    console.log("B - Very Good!!");
} else if (score >= 70) {
    console.log("C - Good!");
} else {
    console.log("F - Failed(need improvement)");
}

for (let task = 1; task <= 5; task++) {
    console.log("Study Task " + task);
}

let reminder = 0;

while (reminder < 3) {
    console.log("Time to study!");
    reminder++;
}
