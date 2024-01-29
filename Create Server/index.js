const http = require('http');

function abc(){
    console.log("My name is Usman");
}

http.createServer((req, res) => {
    res.write("<h1>My Name is Haseeb And My Father Name is Shaukat ALi</h1>");
    res.end();
}).listen(5000);