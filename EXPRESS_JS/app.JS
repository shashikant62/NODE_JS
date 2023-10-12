const express=require('express')
const path=require('path')
const server=express();
const staticPath=path.join(__dirname,"./public")
server.use(express.static(staticPath))
// server.get('/',(req,res)=>{
//     // req.end('hello')
//     res.send("hello brp")
// })

server.listen(3400)