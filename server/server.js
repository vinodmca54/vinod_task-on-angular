var express = require('express');
var mongojs = require('mongojs');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
var db = mongojs('sample',['registerInfo']);
app.use(express.static('./../public'))
app.use(morgan('dev'));


app.use(bodyParser.json());
app.post('/register/data',function(req,res){
   console.log(req.body);
   db.registerInfo.insert(req.body,function(err, doc){
      res.json(doc); 
   })
   
})

app.get('/userdata',function(req,res){

    db.registerInfo.find({},function(err, doc){
      if(err){
         res.json({'message':'userdetails not found'});
      }
          res.json(doc); 
      }) 

})


app.get('/login/:uName/:password',function(req,res){
   console.log('login query called');
   console.log(req.params);
   if(req.params.uName == 'admin' && req.params.password == 'admin'){
      db.registerInfo.find({},function(err, doc){
        res.json(doc); 
      }) 
   }else{
      db.registerInfo.find({'userName': req.params.uName, 'pwd': req.params.password},function(err, doc){
        res.json(doc); 
      })
   }
   
   
})


app.use('/', function(req,res){
    res.sendFile(path.resolve('./../public/index.html'));
})

app.listen(7777);
console.log('server running on port number 7777');