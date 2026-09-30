const aboutMe = {
name: "bogart",
age: 22,
course: "BSIS",
introduce: function() {
    console.log(`Hi, my name is ${this.name}, I am ${this.age} years old and I am taking ${this.course}.`);
    }
};

aboutMe.hobby = "cycling"
aboutMe.introduce();