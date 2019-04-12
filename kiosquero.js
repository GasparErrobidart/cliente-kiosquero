const express = require('express');
const server  = express();
const bodyParser = require('body-parser');
const printWithStyle = require('./printWithStyle');

server.use(bodyParser.urlencoded());
server.use((req,res,next)=>{
  printWithStyle(req);
  next();
})

server.get("/",(req,res)=>{
  console.clear();
  res.sendFile(__dirname + "/home.html")
})

server.get("/kiosquero.jpg",(req,res)=>{
  res.sendFile(__dirname + "/kiosquero.jpg")
})

server.get("/favicon.ico",(req,res)=>{
  res.sendFile(__dirname + "/favicon.ico")
})

server.post("/pedir",(req,res)=>{
  res.status(200);
  res.send("Aca tenes, " + req.body.producto);
});

server.get("*", (req,res)=>{
  res.status(404);
  res.send("Aca no hay nada (404)");
})

server.listen(1234,()=>{
  console.log("El kiosquero atiende en 1,2,3,4...")
})
