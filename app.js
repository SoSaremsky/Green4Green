const express = require("express");


const app = express();
app.use(express.json());
app.get((res, req)=>{
  const goat = JSON.Stringify(req.body);
  console.log(goat);
})
app.use(express.static("./public"));


app.listen(5000, ()=>console.log("connected"));
