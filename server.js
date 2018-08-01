var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./model.js');
var app = express();
mongoose.connect('mongodb://localhost/angular');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extented:true}));

var port = process.env.PORT || 8000;


app.use(express.static(__dirname+'/app'))

//api for signup
app.post('/signup', (req, res)=>{
	User.findOne({email:req.body.email}, (err, user)=>{
		console.log(user)
		//console.log("Requested data are"+JSON.stringify(req.body))
		if(err){
			return res.send("Error Occured");
		}
		else if(user){
			return res.send("Email id already Registered");
		}
		else{
				var user = new User(req.body)
				user.save((err, result)=>{ // insert a document because user is a single object
				//User.create((req.body),(err, result)=>{ // insert many data at a time because User is a array of objects
				if(err){
					return res.send("Error Occured");
				}
				else{
					return res.send("Signup successfull");
				}
			})
		}
	})
})
app.listen(port, function(){
	console.log("port runing on http://localhost:"+port);
})
