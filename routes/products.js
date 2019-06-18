var express = require('express');
var productModel = require('../models/product.model');
var postModel = require('../models/post.models');
var writerRestricted = require('../middlewares/writerRestricted');
var adminRestricted = require('../middlewares/adminRestricted');

var router = express.Router();

router.get('/add', (req, res, next) => {
    res.render('vwProducts/add');
  })

router.get('/postmanage', adminRestricted, (req, res) => {
    postModel.all()
        .then(rows => {
            rows.forEach(element => {
                if(element.TinhTrang == 1){
                    element.TinhTrang = 'Chưa được duyệt';
                }else if(element.TinhTrang == 2){
                    element.TinhTrang = 'Đã duyệt';
                }
            });
            res.render('vwProducts/postmanage', {
                baiviet: rows
            })
        })
        .catch(error => {
            res.render('error', { layout: false});
        });
})

router.get('/uppost',adminRestricted, writerRestricted, (req, res, next) => {
    res.render('vwProducts/uppost');
  })

  router.get('/editpost/:id', adminRestricted, writerRestricted, (req, res) => {
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

router.post('/editpost/update', adminRestricted, writerRestricted, (req, res, next) => {
    categoryModel.update(req.body).then(n => {
        res.redirect('/products');
    }).catch(next);

})

router.post('/editpost/delete', adminRestricted, writerRestricted, (req, res, next) => {
    categoryModel.delete(+req.body.ID).then(n => {
        res.redirect('/products');
    }).catch(next);
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