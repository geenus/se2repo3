const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const sum = require('./sum');

app.get('/', function(req, res){
		res.send("sum of 2 + 6 is : " + sum(2,6));
});

app.listen(PORT, function(){
		console.log("listening...");
});
