//create a function ehich accept one parameter ---------->. either number array or string array

type numOrStr= number | string;
function firstValue(arg:numOrStr[]){
    return arg[0];
}

let val=firstValue(["A", "B", "C"]);
// val.toLowerCase(); // This will work because val is inferred as string

//use generics
function firstValue2<T>(arg:T[]){
    return arg[0];
}
let val2=firstValue2<String>(["A", "B", "C"]);
val2?.toLowerCase(); // This will work because val2 is inferred as string

let val3=firstValue2<number>([1, 2, 3]);
val3?.toString(); // This will work because val3 is inferred as number


//what does ? mean in above code?The `?` in the above code is the optional chaining operator. 
// It allows you to safely access properties or call methods on an object that may be `null` or `undefined`.


interface User{
    name:String,
    age:number,
    phone?:number
}
let u1:User={
    name:"John",
    age:30,
    //phone:1234567890
}
console.log(u1.phone); // This will not throw an error because phone is optional and may be undefined

