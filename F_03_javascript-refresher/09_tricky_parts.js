console.log(10 == "10");
console.log(10 === "10");

let favoriteColor;
let favoriteFood = null;

console.log("Favorite Color:", favoriteColor);
console.log("Favorite Food:", favoriteFood);

const student = {
    name: "Mae",

    regularMethod: function () {
        console.log("Regular method:", this.name);
    },

    arrowMethod: () => {
        console.log("Arrow method:", this.name);        
    }
};

student.regularMethod();
student.arrowMethod();

const original = ["movie", "exercise", "Wattpad"];

const copyByReference = original;

copyByReference.push("music");

console.log("Original after reference copy:", original);

const copyBySpread =[...original];

copyBySpread.push("learning");

console.log("Original after spread copy:", original);
console.log("Spread copy:", copyBySpread);
