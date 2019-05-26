var express = require('express');
var morgan = require('morgan');
var exphbs = require('express-handlebars');
var createError = require('http-errors');

var app = express();

app.use(morgan('dev'));

app.use(express.static('public'));

// su dung express-handlebars 
app.engine('hbs', exphbs({
    defaultLayout: 'main.hbs'
}));

app.set('view engine', 'hbs');

// su dung phuong thuc post
app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

// render toi trang can su dung
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/error', (req, res) => {
    res.render('error', { layout: false });
});

app.use((req, res, next) => {
    next(createError(404));
})

app.use((err, req, res, next) => {
    var status = err.status || 500;
    var vwErr = 'error';

    if (status === 404) {
        vwErr = '404';
    }

    var message = err.message;
    var error = err;

    res.status(status).render(vwErr, {
        layout: false,
        message,
        error
    });

})

var port = 3000;
app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});