var multer = require('multer');
var mysql = require('mysql');
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

  app.post('/account/uppost', restricted, (req, res, next) => {
      multer({ storage }).single('file')(req, res, err => {
          if (err) {
            console.log(entity)
              return res.json({
                  error: err.message
              });
          }
          var entity = req.body;
          entity.AnhDaiDien = '/public/images/' + req.file.filename;

          console.log(entity);


          postModel.add(entity, (err, post) => {
              if (err) return res.json({ error: err.message });
          });
          res.render('/vwAccount/uppost');
      })
  })
}