/*
PROJETO EXEMPLO EM NODE.JS PARA USO DE SESSION...
By Beto Licks
*/

const express = require('express');
const session = require('express-session');
const bodyparser = require('body-parser');

const wporta = 9000;
const app    = express();
var wpath    = require('path');
var wlogin   = 'nodejs';
var wsenha   = '123';

app.use(session({secret:'x54errr9p98888KHDmMjJ'}));
app.engine('html', require('ejs').renderFile);
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine', 'html');
app.use('/public',express.static(wpath.join(__dirname, 'public')));
app.set('views',wpath.join(__dirname, '/views'));

app.post('/',(req,res)=>{   
   if (req.body.edt_password == wsenha && req.body.edt_username == wlogin){
      req.session.login  = wlogin;      
      res.render('logado');
   } else {
      res.render('index');
   }
})

app.get('/',(req,res)=>{
   //-> LOGADO...
   if (req.session.login){      
      res.render('logado');
   } else {
      res.render('index');
   }   
})

app.listen(wporta,()=>{
   console.log('SERVIDOR EM FUNCIONAMENTO.');
})
