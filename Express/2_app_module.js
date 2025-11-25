const express = require("express");

const app = express();

//application level settings

app.set('view engine', 'ejs')


//routing 

app.get('/',(req,res)=>{
    res.send('home page')
})


app.post('/api/data',(req,res)=>{
    res.json({
        message : 'Data Recieved',
        data : req.body,
    });
});

app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send('spmething went wrong')
});