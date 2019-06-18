var express = require('express');
var productModel = require('../models/product.model');
var postModel = require('../models/post.models');

var router = express.Router();

router.get('/add', (req, res, next) => {
    res.render('vwProducts/add');
  })

router.get('/postmanage', (req, res) => {
    postModel.all()
        .then(rows => {
            res.render('vwProducts/postmanage', {
                baiviet: rows
            })
        })
        .catch(error => {
            res.render('error', { layout: false});
        });
})

router.get('/uppost', (req, res, next) => {
    res.render('vwProducts/uppost');
  })

  router.get('/editpost/:id', (req, res) => {
    var id = req.params.id;
    if(isNaN(id)){
        res.render('vwProducts/editpost',{
            error: true
        })
        return;
    }
    postModel.single(id)
    .then(rows => {
        if (rows.length > 0) {
            res.render('vwProducts/editpost', {
                error: false,
                baiviet: rows[0]
            })
        } else {
            res.render('vwProducts/editpost',{
                error: true
            });
        }
    });
})

  
router.get('/:id', (req, res, next) => {
    var id = req.params.id;
    if (isNaN(id)) {
        res.render('vwProducts/detail', { error: true });
        return;
    }

    productModel.single(id)
        .then(rows => {
            if (rows.length > 0) {

                var product = rows[0];

                res.render('vwProducts/detail', {
                    error: false,
                    product
                });
            } else {
                res.render('vwProducts/detail', {
                    error: true
                });
            }
        }).catch(next);
})


module.exports = router;