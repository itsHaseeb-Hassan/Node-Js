let a=12;
let b=14;

// resolve the draw back of the asynchronous code

let waitingData=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(56);
    },4000)
})
 
waitingData.then((b)=>{
     
    console.log(a+b);
})