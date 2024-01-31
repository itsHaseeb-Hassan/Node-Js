// synchronous code

let a=12;
let b=20;
console.log("print the statement before addition")
console.log(a+b);
console.log("print the statement after addition")

// Asynchronous code
setTimeout(()=>{
    b=30
},3000)
// disadvantage of the async code
console.log(a+b)