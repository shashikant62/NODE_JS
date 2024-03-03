const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test').then(()=>{
    console.log(" mongodb Succesfull connect");
}).catch((err)=>{
    console.log("ERROR"+err);
})

const schemaproduct=new mongoose.Schema({
    name:String,
    pass:String
})

const loginmodel=new mongoose.model("loginmodel",schemaproduct);

module.exports=loginmodel;