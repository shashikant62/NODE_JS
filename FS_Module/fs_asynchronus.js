//fs-asynchronus,all rus in onece
const fs=require('fs')

//callback function requre for asynchronus
fs.writeFile('async_read.txt','hello welcome to github',(err)=>{
    console.log(err);
})

//add txt in file
fs.appendFile('async_read.txt',"  follow me",(err)=>{
    console.log(err);
});

//read file
const data=fs.readFile('async_read.txt','utf-8',(err)=>{
    console.log(err);
});
console.log(data)


//rename file
fs.rename('async_read.txt','async_read-change.txt',(err)=>{
    console.log(err);
})