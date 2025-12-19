let obj={
    name:"Shristi",
    age:21,
    city:"Pune"
}
Object.freeze(obj);
obj.age=22;
console.log(obj.age);