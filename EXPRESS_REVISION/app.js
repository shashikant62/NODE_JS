const express=require('express');
const body_parser=require('body-parser');
const path=require('path');
const app=express();
app.use(body_parser.urlencoded({ extended: false }));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/i.html'));
})

app.post('/api/re',(req, res)=>{   
    const name=req.body.username;
    const pass=req.body.password;
    res.json({
        "success":"true",
        "name":`${name}`,"pass":`${pass}`
    })
})  


app.listen(3000,()=>{
    console.log("app deployed");
})