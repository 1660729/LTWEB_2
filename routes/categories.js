var express = require('express');
var categoryModel = require('../models/category.model');
var productModel = require('../models/product.model');
var config = require('../config/default.json');
var restricted = require('../middlewares/restricted');

var router = express.Router();

// router.get('/', (req, res, next) => {
//     productModel.all()
//         .then(rows => {
//             res.render('home', {
//                 products: rows
//             });
//         }).catch(next);

// })

router.get('/', restricted, (req, res) => {
    categoryModel.allChild()
        .then(rows => {
            res.render('vwCategories/index', {
                chuyenmuccon: rows
            })
        })
        .catch(error => {
            res.render('error', { layout: false });
        });
})

router.get('/add', restricted, (req, res, next) => {
    res.render('vwCategories/add');
})

router.post('/add', restricted, (req, res, next) => {
    categoryModel.add(req.body).then(id => {
        res.render('vwCategories/add');
    }).catch(next);
})

router.get('/edit/:id', restricted, (req, res, next) => {
    var id = req.params.id;
    if (isNaN(id)) {
        res.render('vwCategories/edit', { error: true });
        return;
    }

    categoryModel.single(id)
        .then(rows => {
            if (rows.length > 0) {
                var chuyenmuccon = rows[0];
                res.render('vwCategories/edit', {
                    error: false,
                    chuyenmuccon
                });
            } else {
                res.render('vwCategories/edit', {
                    error: true
                });
            }
        }).catch(next);
})

router.post('/update', restricted, (req, res, next) => {
    categoryModel.update(req.body).then(n => {
        res.redirect('/categories');
    }).catch(next);

})

router.post('/delete', restricted, (req, res, next) => {
    categoryModel.delete(+req.body.ID).then(n => {
        res.redirect('/categories');
    }).catch(next);
})


router.get('/:id/products', (req, res, next) => {
    var id = req.params.id;
    if (isNaN(id)) {
        res.render('vwProducts/byCat', { error: true });
        return;
    }

    var limit = config.paginate.default;
    var page = +req.query.page || 1;
    if (page < 1) page = 1;
    var start_offset = (page - 1) * limit;

    Promise.all([
        productModel.countByCat(id),
        productModel.pageByCat(id, start_offset)
    ]).then(([nRows, rows]) => {


        for (var c of res.locals.lcCategories) {
            if (c.CatID === +id) {
                c.active = true;
            }

        }

        var total = nRows[0].total;
        var nPages = Math.floor(total / limit);
        if (total % limit > 0)
            nPages++;

        var page_numbers = [];
        for (i = 1; i <= nPages; i++) {
            page_numbers.push({
                value: i,
                active: i === +page
            })
        }


        res.render('vwProducts/byCat', {
            error: false,
            empty: rows.length === 0,
            productsCat: rows,
            page_numbers
        })
    }).catch(next)

})


// router.get('/', (req, res, next) => {
//     var id = req.params.id;
//     // if (isNaN(id)) {
//     //     res.render('vwProducts/byCat', { error: true });
//     //     return;
//     // }

//     productModel.all().then(rows => {

//         res.render('home', {
//             error: false,
//             empty: rows.length === 0,
//             products: rows
//         })
//     }).catch(next)

// })

module.exports = router;