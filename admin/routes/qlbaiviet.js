var express = require('express');
var qlbaivietModel = require('../model/qlbaiviet.model')

var router = express.Router();

router.get('/', (req, res) => {
    qlbaivietModel.all()
        .then(rows => {
            res.render('qlbaiviet/indexBaiViet', {
                baiviet: rows
            })
        })
        .catch(error => {
            res.render('error', { layout: false});
        });
})

router.get('/add', (req, res) => {
    res.render('qlbaiviet/addbv');
})

router.post('/add', (req, res) => {
    var entity = {
                 AnhDaiDien: req.body.AnhDaiDien,
                 TieuDe: req.body.TieuDe,
                 ChuyenMucChaID: req.body.ChuyenMucChaID,
                 ChuyenMucConID: req.body.ChuyenMucConID,
                 Youtube: req.body.Youtube,
                 Nhan: req.body.Nhan,
                 NgayDang: req.body.NgayDang,
                 NoiDung: req.body.NoiDung,
                 NDTomTat: req.body.NDTomTat,
                 TinhTrang: req.body.TinhTrang,
                 LuotXem: req.body.LuotXem};
        qlbaivietModel.add(entity).then(id => {
        console.log(id);
        res.render('qlbaiviet/addbv');
    }); 
})

router.get('/editbv/:id', (req, res) => {
    var id = req.params.id;
    if(isNaN(id)){
        res.render('qlbaiviet/editbv',{
            error: true
        })
        return;
    }
    qlbaivietModel.single(id)
    .then(rows => {
        if (rows.length > 0) {
            res.render('qlbaiviet/editbv', {
                error: false,
                baiviet: rows[0]
            })
        } else {
            res.render('qlbaiviet/editbv',{
                error: true
            });
        }
    });
})

router.post('/update', (req, res) => {
    qlbaivietModel.update(req.body).then(n => {
        res.redirect('/qlbaiviet');
    });   
})

router.post('/delete', (req, res) => {
    qlbaivietModel.delete(+req.body.ProID).then(n => {
        res.redirect('/qlbaiviet');
    });   
})

module.exports = router;