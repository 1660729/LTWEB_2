var db = require('../utils/db');

module.exports = {
    all: () => {
        return db.load('select * from taikhoan');
    },

    single: id => {
        return db.load(`select * from taikhoan where ID = ${id}`);
    },

    singleByUserName: userName => {
        return db.load(`select * from taikhoan where NguoiDung = '${userName}'`);
    },

    singleByEmail: email => {
        return db.load(`select * from taikhoan where Email = '${email}'`);
    },

    add: entity => {
        return db.add('taikhoan', entity);
    },

    update: entity => {
        var id = entity.ID;
        delete entity.ID;
        return db.update('taikhoan', 'ID', entity, id);
    },

    delete: id => {
        return db.delete('taikhoan', 'ID', id);
    }
};