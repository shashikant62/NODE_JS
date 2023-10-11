//first option export
// const op=require('./export.js')
// console.log(op.add(5,6));
// console.log(op.multy(5,6));
// console.log(op.sub(5,6));

//another option export
const {add,multy,sub}=require('./export.js') //object destructuring
console.log(add(5,6));
console.log(multy(5,6));
console.log(sub(5,6));