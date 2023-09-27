const obj1 = {name: "person 1", age: 5};
const keys1= Object.key(Obj1).sort();
console.log(keys1);

const obj2 = {age: 5, name: "person 1",};
const keys2= Object.key(Obj1).sort();
console.log(keys2);

if(JSON.stringify(keys1) === JSON.stringify(keys2)) {
    console.log("Equal");
}else {
    console.log("Not Equal!");
}