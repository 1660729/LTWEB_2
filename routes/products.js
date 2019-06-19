var express = require('express');
var productModel = require('../models/product.model');
var postModel = require('../models/post.models');
var writerRestricted = require('../middlewares/writerRestricted');

var router = express.Router();

router.get('/postmanage',writerRestricted, (req, res) => {
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

router.get('/uppost', writerRestricted,(req, res, next) => {
    res.render('vwProducts/uppost');
  })

// router.post('/uppost', (req, res) => {
//     var entity = {
//                  AnhDaiDien: req.body.AnhDaiDien,
//                  TieuDe: req.body.TieuDe,
//                  ChuyenMucChaID: req.body.ChuyenMucChaID,
//                  ChuyenMucConID: req.body.ChuyenMucConID,
//                  Youtube: req.body.Youtube,
//                  Nhan: req.body.Nhan,
//                  NgayDang: req.body.NgayDang,
//                  NoiDung: req.body.NoiDung,
//                  NDTomTat: req.body.NDTomTat,
//                  TinhTrang: req.body.TinhTrang,
//                  LuotXem: req.body.LuotXem};
//         postModel.add(entity).then(id => {
//         console.log(id);
//         res.render('vwProducts/uppost');
//     }); 
// })

router.get('/editpost/:id',writerRestricted,(req, res) => {
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


router.post('/update', writerRestricted,(req, res) => {
    postModel.update(req.body).then(n => {
        res.redirect('/products');
    });   
})

router.post('/delete', writerRestricted,(req, res) => {
    postModel.delete(+req.body.ProID).then(n => {
        res.redirect('/products');
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