const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const sum = require('./sum');

app.get('/', function(req, res){
		res.send("sum of 2 + 8 is : " + sum(2,8));
});

app.listen(PORT, function(){
		console.log("listening...");
});
