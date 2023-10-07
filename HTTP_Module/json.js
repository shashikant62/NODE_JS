const fs=require('fs')
const { resolve } = require('node:path/win32')
const data=fs.readFile('./data.json',"utf-8",(err,data)=>{
    console.log(err);
    console.log(data);
    const datajs=JSON.parse(data)
})