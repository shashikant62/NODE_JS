const fs=require('fs');

//create file
/*fs.appendFile("demo.txt","hello",(err)=>{
    if(err){
    console.log("error occurs");
    }
    console.log("Created...")
})

fs.appendFileSync("demo1.txt","hello",(err)=>{
    if(err){
    console.log("error occurs");
    }
    console.log("Created...")
})


fs.open('demo2.txt',(err,file)=>{
    if (err) throw err;
    console.log(file);
})


fs.writeFileSync('demo2.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});
*/
//readfile

  fs.readFile('demo2.txt',"utf-8", function(err, data) {
   if(err)console.log(err);
   console.log(data);
  });

//delete file
// fs.unlink('demo.txt', function (err) {
//     if (err)console.log(err);
//     console.log('File deleted!');
// });

//rename
// fs.rename('demo1.txt', 'myrenamedfile.txt', function (err) {
//     if (err) throw err;
//     console.log('File Renamed!');
// });

fs.chmod('demo2.txt',(uid)=>{
    console.log(uid);
})