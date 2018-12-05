const express = require('express');
const hbs = require('hbs');

var app = express();


// 

app.set('view engine',hbs);

// middleware

app.use(express.static(__dirname+"/public"))


// reqgister path
app.get('/',(req,res)=>{

	//res.send("<h1>Hello express</h1>");
	res.render('home.hbs',{
		title:'this is a home page',
		description:'Page description here'
	})
});

app.get('/test',(req,res)=>{
	res.send("This is a test page");
});

app.get('/about',(req,res)=>{
	res.render('about.hbs',{
		pageTitle:'About Dynamic',
		year:new Date().getFullYear()
	});
});

app.listen(3000,()=>{
	console.log("Server is running on 3000");
});