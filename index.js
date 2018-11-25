var express = require('express');
var app  = new express();
app.get('/api/course',(req,res) =>{
    res.send('hello world');
});
const port = process.env.PORT || 3000;
app.listen(port  , () => console.log(`listeing to po ${port}`));