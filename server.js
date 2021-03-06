const express = require('express');
const hbs = require('hbs');

var app = express();

const port = process.env.PORT || 3000;
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

app.get('/training',(req,res)=>{
	res.render('training.hbs',{
		title:'Training page',
		description:'This is a trainig page created for testing purpose'
	});
});

app.listen(port,()=>{
	console.log(`Server is running on ${port}`);
});