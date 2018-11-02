const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const sum = require('./sum');

app.get('/', function(req, res){
		res.send("sum of 22 + 22 is : " + sum(22,22));
});

app.listen(PORT, function(){
		console.log("listening...");
});
