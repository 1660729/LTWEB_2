var express = require('express');
var exphbs = require('express-handlebars');
var hbs_sections = require('express-handlebars-sections');
var morgan = require('morgan');
var createError = require('http-errors');
var numeral = require('numeral');
var path = require('path');

var app = express();
// app.use(express.static('/public'));
app.use(express.static(path.join(__dirname, '/public')));

app.use(morgan('dev'));

// su dung express-handlebars 
app.engine('hbs', exphbs({
    layoutsDir: 'views/layouts',
    defaultLayout: 'main.hbs',
    helpers: {
        format_number: val => {
            return numeral(val).format('0,0');
        },
        section: hbs_sections()
    }
}));

app.set('view engine', 'hbs');

// su dung phuong thuc post
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

require('./middlewares/session')(app);
require('./middlewares/passport')(app);

app.use(require('./middlewares/auth.mdw'));

app.use('/account', require('./routes/account'));

// render toi trang home
app.get('/', (req, res) => {
    res.render('home');
});

// render toi trang error
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
    console.log(`server is running at port http://localhost:${port}`);
});