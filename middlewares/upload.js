var multer = require('multer');
var postModel = require('../models/post.models');
var restricted = require('./restricted');
var authmdw = require('./auth.mdw');
module.exports = function (app) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './public/images')
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname)
        }
    });

    app.post('/products/uppost', restricted, (req, res, next) => {
        multer({ storage }).single('file')(req, res, err => {
            if (err) {
                return res.json({
                    error: err.message
                })
            }
                var newPost = new postUser({
                    AnhDaiDien: '/public/imgages/' + req.file.filename,
                    TieuDe: req.body.tieuDe,
                    ChuyenMuc: req.body.chuyenMuc,
                    Nhan: req.body.tag,
                    NgayDang: req.body.ngayDang,
                    NDTomTat: req.body.abtract,
                    NoiDung: req.body.content,
                    _id: req.user._id,
                    TinhTrang: false,
                    LuotXem: 0,
                  });
                  postUser.addPost(newPost, (err, post) => {
                    if (err) return res.json({ error: err.message });
                  });
                  res.redirect('/products/uppost');
                })
              })
            }