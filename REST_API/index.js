const express=require('express')
const body_parser=require('body-parser');
const app=express();
const loginmodel=require('./mongo');
app.use(express.json());
app.use(body_parser.urlencoded({ extended: false }));

app.get('/',(req,res)=>{
    res.send("hi");
})
app.post('/api/v1',async(req,res)=>{
   const app=await loginmodel.create(req.body);
   res.json({
        succes:true,
        app
    })
    console.log(app);
})

app.get('/api/v1',async(req,res)=>{
    const data=await loginmodel.find();
    res.json({
        succes:true,
        data
    })
})

app.put('/api/v1:name',async(req,res)=>{
    const data=await loginmodel.updateOne({"name":"post1"},{$set:{name:"Babita"}});
    res.json({
        succes:true,
        data
    })
})


app.patch('/api/v1:name',async(req,res)=>{
    const data=await loginmodel.updateOne({"name":"Babita"},{$set:{name:"Babita1"}});
    res.json({
        succes:true,
        data
    })
})


app.delete('/api/v1:name',async(req,res)=>{
    const data=await loginmodel.deleteOne({"name":"Babita1"});
    res.json({
        succes:true,
        data
    })
})

app.listen(3000);