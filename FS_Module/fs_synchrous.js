//synchronus,step by step

const fs=require('fs');

//crete file
// fs.mkdirSync('read1.txt')

//write in file
fs.writeFileSync('read.txt',"welcome to github");

//add txt in file
fs.appendFileSync('read.txt',"  follow me");

//read file
const data=fs.readFileSync('read.txt','utf-8');
console.log(data)

//anather optio to read bufferr is
const bufferr=fs.readFileSync('read.txt','utf-8');
const data_buff=bufferr.toString();
console.log(data_buff)

//rename file
fs.renameSync('read.txt','read-change.txt')