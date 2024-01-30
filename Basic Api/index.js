const http=require("http")

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application\json'});
    res.write(JSON.stringify({name:'haseeb hassan',email:'haseeb@gmail.com'}))
    res.end()
}).listen(8000)