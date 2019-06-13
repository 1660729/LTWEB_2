var express = require('express');
var exphbs  = require('express-handlebars');
//var bodyParser = require('body-parser');

var app = express();

app.engine('hbs', exphbs({
     layoutsDir: 'Views/Layouts',
    defaultLayout: 'main.hbs'
}));
app.set('view engine', 'hbs');

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ 
    extended: true
}));
 
// parse application/json
app.use(express.json());

var qlthumucchaRoutes = require('./routes/qlthumuccha');
app.use('/qlthumuccha', qlthumucchaRoutes);

var qlbaivietchaRoutes = require('./routes/qlbaiviet');
app.use('/qlbaiviet', qlbaivietchaRoutes);

app.get('/', (req, res) => {
    // res.end('hello express');
    res.render('home');
})

var port = 3200;
app.listen(port, () => {
    console.log(`server is running at ${port}`);
});