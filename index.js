const http=require('http');
const server=http.createServer((req,res,err)=>{
    res.end("Hello from the other side.How ypu doin?");
    if(err) console.error(err.message);

});
server.listen(3000,()=>{
    console.log("Server listening on port 3000");
});