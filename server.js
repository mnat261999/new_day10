var express = require('express');
var app     = express();
var bodyParser = require('body-parser');
var morgan  =   require('morgan');
var mongoose    =   require('mongoose');
var config = require('./config');
var path = require('path');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type, Authorization');
    next();
});
app.use(morgan('dev'));
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/mydb',{useNewUrlParser: true});
mongoose.set('useCreateIndex',true);

app.use(express.static(__dirname + '/public'));
var apiRoutes = require('./app/routes/api')(app, express);
app.use('/api', apiRoutes);

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

app.listen(config.port);
console.log('Dang dung Port: ' + config.port);
    