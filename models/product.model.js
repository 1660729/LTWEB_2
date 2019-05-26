var db = require('../untils/db');

module.exports = {
    all: () => {
        return db.load('select * from products');
    },
    allByCat:Catid => {
        return db.load('select * from products wwhere CatID = ${CatID}');
    },
    single: id => {
        return db.load 
    }
}