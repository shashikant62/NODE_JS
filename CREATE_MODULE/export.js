const add=(a,b)=>{
    return a+b;
}
const sub=(a,b)=>{
    return a-b;
}
const multy=(a,b)=>{
    return a*b;
}
//first option
module.exports.add =add;
module.exports.sub =add;
module.exports.multy =add;

//another option
module.exports={add,multy,sub};