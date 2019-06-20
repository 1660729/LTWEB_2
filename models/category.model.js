var db = require('../utils/db');

module.exports = {
    all: () => {
        return db.load('select * from chuyenmuccha');
    },

    allChild: () => {
        return db.load('select * from chuyenmuccon');
    },

    single: id => {
        return db.load(`select * from chuyenmuccon where ID = ${id}`);
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

    selectPostOfEditorAndManageCategoryAndStatus: () => {
        return db.load(`
            select * 
            from taikhoan tk, chuyenmuccon con
            where tk.AssignedCategories = con.ID 
        `);
    },


    add: entity => {
        return db.add('chuyenmuccon', entity);
    },

    update: entity => {
        var id = entity.ID;
        delete entity.ID;
        return db.update('chuyenmuccon', 'ID', entity, id);
    },

    delete: id => {
        return db.delete('chuyenmuccon', 'ID', id)
    }

};