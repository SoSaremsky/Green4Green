const express = require("express");
var multer  = require('multer')
var upload = multer()
let path = require("path");
let duck;

const app = express();
app.use(express.json());
app.get((res, req)=>{
  const goat = JSON.Stringify(req.body);
  console.log(goat);
})
app.use(express.json());
app.post('/submission', upload.none(), function (req, res, next) {
  duck = req.body;
  res.sendFile(__dirname + "/Bing Hack 2020/results.html");
  next();
})

app.get("/budData ", (req, res)=>{
  res.send(duck);
  console.log(req);
})

app.use(express.static("./Bing\ Hack\ 2020"));



app.listen(5000, ()=>console.log("connected"));
