var express = require('express');
var categoryModel = require('../models/category.model');
var productModel = require('../models/product.model');

var router = express.Router();

// router.get('/', (req, res, next) => {
//     productModel.all()
//         .then(rows => {
//             res.render('home', {
//                 products: rows
//             });
//         }).catch(next);

// })

router.get('/add', (req, res, next) => {
    res.render('vwCategories/add');
})

router.post('/add', (req, res, next) => {
    categoryModel.add(req.body).then(id => {
        res.render('vwCategories/add');
    }).catch(next);
})

router.get('/edit/:id', (req, res, next) => {
    var id = req.params.id;
    if (isNaN(id)) {
        res.render('vwCategories/edit', { error: true });
        return;
    }

    categoryModel.single(id)
        .then(rows => {
            if (rows.length > 0) {
                var category = rows[0];
                res.render('vwCategories/edit', {
                    error: false,
                    category: rows[0]
                });
            } else {
                res.render('vwCategories/edit', {
                    error: true
                });
            }
        }).catch(next);
})

router.post('/update', (req, res, next) => {
    categoryModel.update(req.body).then(n => {
        res.redirect('/categories');
    }).catch(next);

})

router.post('/delete', (req, res, next) => {
    categoryModel.delete(+req.body.CatID).then(n => {
        res.redirect('/categories');
    }).catch(next);
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