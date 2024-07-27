const http=require('http');

const server=http.createServer((req,res)=>{
  res.write("This is some response from your first nodejs server");
  res.end();
})

server.listen(5000,()=>{
  console.log("server has started")
})