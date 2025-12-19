const http=require('http');
const express=require('express');
const app=express();
/*app.use((err,req,res,next)=>{
    if(err) res.status(500).send("Uh Oh. Something broke!");
    else console.log("No errors found");
   
})
*/
app.use((req,res,next)=>{
console.log("This is a middleware");
next();
})
app.use((req,res,next)=>{
console.log("This is a middleware 2");
next();
});

app.get("/",(req,res)=>{
    res.send("What are you upto?");
})
app.get("/nice",(req,res)=>{
    res.send("What are you upto?");
})
app.get("/profile/:name",(req,res)=>{
    res.send("Hello there Ms."+req.params.name);
})
app.get("/profile/:name/:age",(req,res)=>{
    res.send("Hello there Ms."+req.params.name+", of age "+req.params.age);
})
app.get("/information",(req,res,next)=>{
    return next(new Error("This is an error"));
})
//error handler must be at the last
app.use((err,req,res,next)=>{
    if(err) {console.log(err.message);
        res.status(500).send("Uh Oh. Something broke!");}
    else console.log("No errors found");
   
})
app.listen(3000,()=>{
    console.log("Server listening on port 3000");
});