const http=require('http')
const port=3000;
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
    res.end("hello lerner");}
})


server.listen(port);