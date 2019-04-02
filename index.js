const express = require("express")
const PORT = process.env.PORT || 5200
const path =require("path")



var app = express()
app.use(express.static(path.join(__dirname, 'public')));

app.get('*',(req,res,next)=>{
    res.sendFile('index.html');
})




app.listen(PORT,(err)=>{
    if(err){
      console.log(err);
    }
    console.log('Running on port = '+PORT);
});