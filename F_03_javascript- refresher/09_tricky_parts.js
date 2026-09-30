console.log(5 == "5");
console.log(5 === "5");

let notDefined;
let empty = null;

console.log(notDefined);
console.log(empty);

const person = {
    name: "Bogart",
    
    regularMethod: function() {
        console.log("Regular method 'this.name':", this.name);
    },
    
    arrowMethod: () => {
        console.log("Arrow method 'this.name':", this.name);
    }
};

person.regularMethod();
person.arrowMethod();

let originalArray = [1, 2, 3];
let assignedArray = originalArray; 
assignedArray.push(4);
console.log("Original array after '=' copy:", originalArray);

let freshArray = [1, 2, 3];
let spreadArray = [...freshArray];
spreadArray.push(4);
console.log("Fresh array after spread copy:", freshArray);