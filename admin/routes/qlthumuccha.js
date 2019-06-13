var express = require('express');
var qlthumucchaModel = require('../model/qlthumuccha.model')

var router = express.Router();

router.get('/', (req, res) => {
    qlthumucchaModel.all()
        .then(rows => {
            res.render('qlthumuccha/index', {
                chuyenmuccon: rows
            })
        })
        .catch(error => {
            res.render('error', { layout: false});
        });
})





router.get('/add', (req, res) => {
    res.render('qlthumuccha/add');
})

router.post('/add', (req, res) => {
    var entity = {IDCha: req.body.IDCha, TenLoaiCon: req.body.TenLoaiCon};
    qlthumucchaModel.add(entity).then(id => {
        console.log(id);
        res.render('qlthumuccha/add');
    }); 
})

router.get('/edit/:id', (req, res) => {
    var id = req.params.id;
    if(isNaN(id)){
        res.render('qlthumuccha/edit',{
            error: true
        })
        return;
    }
    qlthumucchaModel.single(id)
    .then(rows => {
        if (rows.length > 0) {
            res.render('qlthumuccha/edit', {
                error: false,
                chuyenmuccon: rows[0]
            })
        } else {
            res.render('qlthumuccha/edit',{
                error: true
            });
        }
    });
})

router.post('/update', (req, res) => {
    qlthumucchaModel.update(req.body).then(n => {
        res.redirect('/qlthumuccha');
    });   
})

router.post('/delete', (req, res) => {
    qlthumucchaModel.delete(+req.body.ID).then(n => {
        res.redirect('/qlthumuccha');
    });   
})

module.exports = router;