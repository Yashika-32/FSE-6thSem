"use strict";
//create a function ehich accept one parameter ---------->. either number array or string array
Object.defineProperty(exports, "__esModule", { value: true });
function firstValue(arg) {
    return arg[0];
}
let val = firstValue(["A", "B", "C"]);
// val.toLowerCase(); // This will work because val is inferred as string
//use generics
function firstValue2(arg) {
    return arg[0];
}
let val2 = firstValue2(["A", "B", "C"]);
val2?.toLowerCase(); // This will work because val2 is inferred as string
let val3 = firstValue2([1, 2, 3]);
val3?.toString(); // This will work because val3 is inferred as number
let u1 = {
    name: "John",
    age: 30,
    //phone:1234567890
};
console.log(u1.phone); // This will not throw an error because phone is optional and may be undefined
//# sourceMappingURL=index.js.map