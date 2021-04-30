const express = require("express")

const app = express();

app.get("/register",(req,res)=>{
   res.json({message:"This is registration"})
})

app.listen(3000,()=>{
    console.log(`running on port 3000`)
})