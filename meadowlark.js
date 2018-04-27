
var fortune = require('./lib/fortune.js');
var express = require('express'); 
var app = express();
app.set('port', process.env.PORT || 3000);
// set up view Engine
handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine','handlebars');
// var fortunes =['Fortune1','Fortune2','Fortune3','Fortune4'];
app.use(express.static(__dirname +'/public'));
app.get('/',function(req,res){
    res.render('home');
});

app.get('/about',function(req,res){
    // var randomFortune = fortunes[Math.floor(Math.random()*
        // fortunes.length)];
    res.render('about',{fortune:fortune.getfortune()});
});

app.use(function(req,res,next){
    res.status(404);
    res.render('404');
});

app.use(function(err,req,res,next){
    res.status(500)
    res.render('500');
});

app.listen(app.get('port'), function(){
    console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
    });


