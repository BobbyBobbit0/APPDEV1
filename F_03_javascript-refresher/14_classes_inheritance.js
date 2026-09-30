class Person {
  constructor(name) { this.name = name; }
  sayHello() { console.log("Hi, my name is " + this.name); }
}
 
class Student extends Person {
  study() { console.log(this.name + " is studying."); }
}
 
const student = new Student("Bogart");
student.sayHello();
student.study();
