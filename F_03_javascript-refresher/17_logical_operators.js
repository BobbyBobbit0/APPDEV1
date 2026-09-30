const values = [0, "", "hello", null, undefined, [], {}];

values.forEach((val) => {
    if (val) {
        console.log(val, "is truthy");
    } else {
        console.log(val, "is falsy");
    }
});

const username = "Bogart";
const password = "password123";
const isAdmin = false;
const isSubscriber = true;

const isLoggedIn = username && password;
console.log("Is logged in:", isLoggedIn);

const canWatch = isAdmin || isSubscriber;
console.log("Can watch:", canWatch);

console.log("" || "default");
console.log(username && "Welcome!");