const obj1 = {name: "Saravanan", age: 5};
const key1= Object.keys(obj1).sort();
//console.log(key1);
console.log(JSON.stringify(key1));

const obj2 = {age: 5, name: "natheesh"};
const key2= Object.keys(obj2).sort();
//console.log(key2);
console.log(JSON.stringify(key2));

if(JSON.stringify(key1) === JSON.stringify(key2))
{
    console.log("Equal");
}
else {
    console.log("NotEqual");
}