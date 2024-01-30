const a = 12;
const b = 13;
// node js is async not wait another comand
setTimeout(() => {
    console.log(a+b);
    
}, 3000);
console.log(a+15);