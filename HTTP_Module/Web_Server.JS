//creting server 
const http=require('http')
const port=3000;
const server=http.createServer((req,res)=>{
    res.end("hello lerner");
})

server.listen(port);