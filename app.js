const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const sum = require('./sum');

app.get('/', function(req, res){
		res.send("sum of 1 + 11 is : " + sum(1,11));
});

app.listen(PORT, function(){
		console.log("listening...");
});
