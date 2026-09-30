import greet from "./15_modules_export.js";
import { userInfo } from "./15_modules_export.js";
 
console.log(greet());
console.log(`User: ${userInfo.name}, Age: ${userInfo.age}`);