const fs=require('fs');
console.log(process);
console.log(process.argv);
const input=process.argv
console.log(input[2]);
if(input[2]==='add'){
 fs.writeFileSync(input[3],input[4])
}
else if(input[2]==='remove'){
    fs.unlinkSync(input[3])
}
else{
    console.log("unable request generated");
}