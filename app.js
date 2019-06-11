var express = require('express');
var exphbs = require('express-handlebars');
var hbs_sections = require('express-handlebars-sections');
var morgan = require('morgan');
var createError = require('http-errors');
var numeral = require('numeral');
var path = require('path');
// var productModel = require('./models/product.model');

var app = express();
// app.use(express.static('/public'));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/public',express.static('public'));
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
require('./middlewares/upload')(app);

app.use(require('./middlewares/category.mdw'));
app.use(require('./middlewares/categoryChild.mdw'));
app.use(require('./middlewares/productNews.mdw'));
app.use(require('./middlewares/popularWeek.mdw'));
app.use(require('./middlewares/productViews.mdw'));
app.use(require('./middlewares/productNewsCat.mdw'));
app.use(require('./middlewares/sameCategory.mdw'));
app.use(require('./middlewares/auth.mdw'));

app.use('/account', require('./routes/account'));
app.use('/categories', require('./routes/categories'));
app.use('/products', require('./routes/products'));

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

    // app.set('env', 'prod');
    var isProd = false;
    if (process.env.NODE_ENV && process.env.NODE_ENV === 'prod') {
        isProd = true;
    }

    var message = isProd ? 'An error has occured. Please contact Administrator for more support.' : err.message;
    var error = isProd ? {} : err;

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