var express = require('express');
var bcrypt = require('bcrypt');
var moment = require('moment');
var passport = require('passport');
var nodemailer = require('nodemailer');
var userModel = require('../models/user.model');
var restricted = require('../middlewares/restricted');
// var profileModel = require('../models/profile.model');

var router = express.Router();

router.get('/register', (req, res, next) => {
    res.render('vwAccount/register');
})

router.post('/register', (req, res, next) => {
    var entity = req.body;

    //hash the password
    var saltRounds = 10;
    var hash = bcrypt.hashSync(req.body.password, saltRounds);

    // format date of birth
    var dob = moment(req.body.dob, 'DD/MM/YYYY').format('YYYY-MM-DD');

    entity.MatKhau = hash;
    entity.NgaySinh = dob;
    entity.PhanQuyen = 0;

    delete entity.password;
    delete entity.confirm;
    delete entity.dob;

    userModel.add(entity).then(id => {
        res.redirect('/account/login');
    })
})

router.get('/is-available', (req, res, next) => {
    var user = req.query.user;
    var mail = req.query.mail;
    var pass = req.query.pass;

    userModel.singleByUserName(user).then(rows => {
        if (rows.length > 0)
            res.json(false);
        else res.json(true);
    })

    userModel.singleByEmail(mail).then(rows => {
        if (rows.length > 0)
            res.json(false);
        else res.json(true);
    })

    userModel.singleByPass(pass).then(rows => {
        if (rows.length > 0) {


            var saltRounds = 10;
            var hash = bcrypt.hashSync(pass, saltRounds);

            entity.MatKhau = hash;

            delete entity.email;
            delete entity.password;

            res.json(false);
        } else {
            res.json(true);
        }

    })



})

router.get('/login', (req, res, next) => {
    res.render('vwAccount/login', { layout: false });
})

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err)
            return next(err);

        if (!user) {
            return res.render('vwAccount/login', {
                layout: false,
                err_message: info.message
            })
        }

        var retUrl = req.query.retUrl || '/';
        req.logIn(user, err => {
            if (err)
                return next(err);

            return res.redirect(retUrl);
        });
    })(req, res, next);
})

// router.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));

// router.get('/auth/facebook/callback',
//     passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/account/login' }),
//     function(req, res) {
//         res.redirect('/');
//     });

router.post('/logout', restricted, (req, res, next) => {
    req.logout();
    res.redirect('/account/login');
})

router.get('/profile/:id', restricted, (req, res, next) => {
    var entity = req.body;
    var id = req.params.id;

    if (isNaN(id)) {
        res.render('vwAccount/profile', { error: true });
        return;
    }

    userModel.single(id)
        .then(rows => {
            if (rows.length > 0) {
                res.render('vwAccount/profile', {
                    error: false,
                    profile: rows[0]

                });
            } else {
                res.render('vwAccount/profile', {
                    error: true
                });
            }
        }).catch(next);

})

router.get('/editprofile/:id', (req, res, next) => {
    var id = req.params.id;

    if (isNaN(id)) {
        res.render('vwAccount/editprofile', { error: true });
        return;
    }

    userModel.single(id)
        .then(rows => {
            if (rows.length > 0) {
                res.render('vwAccount/editprofile', {
                    error: false,
                    editprofile: rows[0]

                });
            } else {
                res.render('vwAccount/editprofile', {
                    error: true
                });
            }
        }).catch(next);

})

router.post('/editprofile/:id', restricted, (req, res, next) => {
    var dob = moment(req.body.dob, 'DD/MM/YYYY').format('YYYY-MM-DD');
    var id = req.params.id;
    var entity = req.body;

    entity.NgaySinh = dob;
    entity.ID = id;

    delete entity.dob;

    userModel.update(entity, entity.ID).then(id => {
        return res.redirect(`/account/profile/${entity.ID}`);
    })

})

router.get('/editpassword/:id', restricted, (req, res, next) => {
    res.render('vwAccount/editpassword', { error: true });
})

router.post('/editpassword/:id', (req, res, next) => {
    var id = req.params.id;
    passport.authenticate('local', (err, user, info) => {
        if (err)
            return next(err);

        if (!user) {
            return res.render('vwAccount/editpassword', {
                err_message: info.message
            })
        }
        //
        var saltRounds = 10;
        var hash = bcrypt.hashSync(req.body.newpassword, saltRounds);
        var entity = req.body;
        entity.MatKhau = hash;

        delete entity.username;
        delete entity.password;
        delete entity.newpassword;
        delete entity.confirm;

        userModel.update(entity, id).then(id => {
            var retUrl = req.query.retUrl || '/';
            req.logIn(user, err => {
                if (err)
                    return next(err);
                return res.redirect(retUrl);
            });
        });
    })(req, res, next);

})


router.get('/forgotpassword', (req, res, next) => {
    res.render('vwAccount/forgotpassword');
})

router.post('/forgotpassword', (req, res, next) => {
    var entity = req.body
        // tao password ngau nhien khi forgot
    var iteration = 0;
    var password = "";
    var randomNumber;
    var special = false;
    while (iteration < 6) {
        randomNumber = (Math.floor((Math.random() * 100)) % 94) + 33;
        if (!special) {
            if ((randomNumber >= 33) && (randomNumber <= 47)) { continue; }
            if ((randomNumber >= 58) && (randomNumber <= 64)) { continue; }
            if ((randomNumber >= 91) && (randomNumber <= 96)) { continue; }
            if ((randomNumber >= 123) && (randomNumber <= 126)) { continue; }
        }
        iteration++;
        password += String.fromCharCode(randomNumber);
    }
    // gui mail
    userModel.confirmEmail(entity.Email).then(rows => {
        if (rows.length > 0) {
            var user = rows[0];
            var nodemailer = require('nodemailer');
            var transporter = nodemailer.createTransport('smtps://nguyenquocbao248824%40gmail.com:ilovenodejS2@smtp.gmail.com');
            var mailOptions = {
                from: '"baodientu" <foo@blurdybloop.com>', // sender address
                to: entity.Email, // list of receivers
                subject: '[BAODIENTU] Thông tin đăng nhập tài khoản', // Subject line
                text: 'Reset Password', // plaintext body
                html: `<div>
            <p>Kính chào bạn ` + user.Name + `</p>
            <p>Thông tin đăng nhập mới của bạn trên baodientu là:</p>
            <p>Tên đăng nhập: ` + user.NguoiDung + ` <br> Mật khẩu:  ` + password + `</p>
            <p>Trân trọng,</p>
            <p>----------<br>
            Hệ thống Quản lý Báo Điện Tử<br>
            Đồ án sinh viên CNTT <br> Đại học Khoa học Tự nhiên - ĐHQG TP. Hồ Chí Minh<br>
            </div>`
            };

            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    return console.log("loi");
                }
                console.log('Message sent: ' + info.response);
            });

            // update mat khau vua tao

            var saltRounds = 10;
            var hash = bcrypt.hashSync(password, saltRounds);

            entity.MatKhau = hash;

            delete entity.Email;
            userModel.update(entity, user.ID).then(id => {
                return res.redirect('/account/login');
            })
        }
        ///------------------------
        else {
            return res.send('Your Email not true, you please check your email !!');

        }
    })
});

module.exports = router;