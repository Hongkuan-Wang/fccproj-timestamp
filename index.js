const express = require('express');

const app = express();

app.get('/:time',function(req,res){
    console.log(req.params.time);
    res.end();
});


app.listen(3000,function(){
    console.log("You are listening to port 3000!");
});
