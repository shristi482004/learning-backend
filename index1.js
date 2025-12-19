let arr=[1,2,3,4,5];
arr.forEach(function(val){
    console.log(val+" hello");
});
let ans=arr.map(function(val){
    return val+12;
})
console.log(ans);
let newarr=arr.filter(function(val){
    if(val<=2){return true;}});
    console.log(newarr);
let flag=arr.find(function(val){
    if(val==2){return val;}});
    console.log(flag);
let sum=0;
arr.forEach(function(val){
    sum+=val;
});
console.log(sum);
