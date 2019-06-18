var multer = require('multer');
var postModel = require('../models/post.models');
var writerRestricted = require('../middlewares/writerRestricted');

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

    app.post('/products/uppost', writerRestricted, (req, res, next) => {
        multer({ storage }).single('file')(req, res, err => {
            if (err) {
                return res.json({
                    error: err.message
                });
            }
            var entity = req.body;
            entity.AnhDaiDien = '/public/images/' + req.file.filename;

            console.log(entity);


            postModel.add(entity, (err, post) => {
                if (err) return res.json({ error: err.message });
                console.log(post);
            });
            res.render('vwProducts/uppost',{
                success : 'Thêm thành công bài viết!'
            });
        })
    })
}