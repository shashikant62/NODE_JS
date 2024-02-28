const http =require('http');
const fs=require('fs');
const app=http.createServer((req,res)=>{
    const log=`${Date.now()}==${req.url}`
    fs.appendFile('demo2.txt',log,(err,data)=>{
        console.log(req.headers);
        // res.write("ji")
        res.write(req.url)
        res.end();
    })
});

app.listen(300);