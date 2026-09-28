const aboutMe = {
    name: "Jacob",
    age: 17,
    course: "BS Information System",

    introduce: function () {
        console.log(`Hi, I'm ${this.name}, age ${this.age},`);

    }
};

aboutMe.hobby = "Playing online games";
aboutMe.introduce();

console.log(aboutMe);