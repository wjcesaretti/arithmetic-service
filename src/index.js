const express = require('express');
const app = express();// creates app server
const cors = require('cors')
app.use(cors())
const { add } = require('./arithmetica')
const port = 3000

//this is an endpoint so if you send a req to web server with just a slash
//then the req will send the resp ...
app.get('/', (req,res) => {
    res.send('Arithmetic service - Hello World!')
}) 


//will handle any http request with add and two numbers
app.get('/add/:n/:m',(req,res) => {
    res.json(Number(req.params.n) + Number(req.params.m))
})



app.listen(port) 

