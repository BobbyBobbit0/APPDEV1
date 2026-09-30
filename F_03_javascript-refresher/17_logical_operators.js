const values = [0, "", "hello", null, undefined, [], {}];

values.forEach((val) => {
    if (val) {
        console.log(val, "is truthy");
    } else {
        console.log(val, "is falsy");
    }
});