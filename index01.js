var express = require('express')
var app = express()

app.get('/', function (req, res){
    res.send('hello aku')
})

app.listen(8080);