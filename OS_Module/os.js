//operatin system module
const os=require('os')

//check artitecture of youre comp./lap
const arti=os.arch();
console.log(arti)

//free memory
console.log(os.freemem())

//hostname
console.log(os.hostname())

//platform
console.log(os.platform())

//temp_directory
console.log(os.tmpdir())

//type of os like window,liux,ubantu
console.log(os.type())