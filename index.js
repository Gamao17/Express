var express = require('express');
var app = express();
const path = require('path');

app.set('view engine', 'pug');
app.set('views','./views');
app.use(express.static(path.join(__dirname, 'public')));

// middlware pour vérifier l'heure de connexion
const myLogger = function (req, res, next) {
    console.log("A new request received at " + Date.now());
     next();
  }
app.use(myLogger);

// méthodes pour chaque itinéraires
app.get('/', function(req, res){
    res.render('home_page');})

    app.get('/our_services', function(req, res){
        res.render('our_services');})

        app.get('/contact_us', function(req, res){
            res.render('contact_us');

 });


 app.listen(3000, ()=>{console.log('le serveur est disponible, vous pouvez vous rendre à cet adresse http://localhost:3000/')})