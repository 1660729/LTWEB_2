var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
// var FacebookStrategy = require('passport-facebook').Strategy;
var bcrypt = require('bcrypt');
var userModel = require('../models/user.model');


module.exports = function(app) {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(
        new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password'
        }, (username, password, done) => {
            userModel.singleByUserName(username).then(rows => {
                if (rows.length === 0) {
                    return done(null, false, { message: 'Invalid username' });
                }

                var user = rows[0];
                var ret = bcrypt.compareSync(password, user.MatKhau);
                if (ret) {
                    return done(null, user);
                }

                return done(null, false, { message: 'Invalid password' });
            }).catch(err => {
                return done(err, false);
            })
        })
    );


    // passport.use(
    //     new FacebookStrategy({
    //         clientID: '430214431102229',
    //         clientSecret: '576b3d35a33a4a5017a49ae72cd3c14c',
    //         callbackURL: 'http://localhost:3000/auth/facebook/callback',
    //         profileFields: ['Email', 'NgaySinh']
    //     }, (accessToken, refreshToken, profile, done) => {
    //         userModel.singleByEmail(accessToken).then(rows => {
    //             if (rows.length === 0) {
    //                 console.log("There is no such user, adding now");
    //                 return done(null, true, userModel.add(accessToken));
    //             }

    //             var user = rows[0];
    //             var ret = bcrypt.compareSync(password, user.MatKhau);
    //             if (ret) {
    //                 return done(null, user);
    //             }

    //         }).catch(err => {
    //             return done(err, false);
    //         })

    //     }));


    passport.serializeUser((user, done) => {
        done(null, user);
    })

    passport.deserializeUser((user, done) => {
        done(null, user);
    })
}