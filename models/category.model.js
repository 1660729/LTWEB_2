var db = require('../utils/db');

module.exports = {
    all: () => {
        return db.load('select * from chuyenmuccha');
    },

    single: id => {
        return db.load(`select * from chuyenmuccha where ID = ${id}`);
    },

    // load chuyen muc cha
    alllWithDetails: () => {
        return db.load(`
            SELECT c.*, COUNT(p.ProID) AS num_of_products
            FROM chuyenmuccha c LEFT JOIN baiviet p ON c.ID = p.ChuyenMucChaID
            GROUP BY c.ID, c.TenLoaiCha
        `);
    },

    // load chuyen muc con
    alllWithDetailsChild: () => {
        return db.load(`
        SELECT c.*, COUNT(p.ProID) AS num_of_products
        FROM chuyenmuccon c LEFT JOIN baiviet p ON c.ID = p.ChuyenMucConID
        GROUP BY c.ID, c.TenLoaiCon
        `);
    },

    add: entity => {
        return db.add('chuyenmuccha', entity);
    },

    update: entity => {
        var id = entity.CatID;
        delete entity.CatID;
        return db.update('chuyenmuccha', 'ID', entity, id);
    },

    delete: id => {
        return db.delete('chuyenmuccha', 'ID', id)
    }

};