var express = require('express');
var exphbs  = require('express-handlebars');
var url  = require('url');

var app = express()

 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/sayHello', function (req , res){
	res.render('home');
});

app.get('/', function (req, res) {
  	res.render('index');
});

app.get('/processRequest', function (req, res) {
	var fName = req.query.firstName;
	var lName = req.query.lastName;
	console.log(fName);
	console.log(lName);

	var response = {}
	response = {'firstName' : fName, 'lastName' : lName, 'fullName' : fName + lName};
	
	res.render('myhome', {data : response});
});

app.get('/welcome', function (req, res) {
  res.render('welcome');
});


app.all('/myAccount', function (req, res) {
  res.send('Your account balance is INR 1000000.')
});


app.listen(9000, function() {
	console.log('listening on 9000')
})