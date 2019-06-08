var db = require('../utils/db');

module.exports = {
    all: () => {
        return db.load('select * from baiviet');
    },

    // top 10 bai viet moi nhat
    latestNews: () => {
        return db.load(`
            SELECT bv.*, con.*, DAY(bv.NgayDang) AS day, MONTH(bv.NgayDang) AS month, YEAR(bv.NgayDang) AS year  
            FROM baiviet bv JOIN chuyenmuccon con ON bv.ChuyenMucConID = con.ID            
            ORDER BY bv.NgayDang desc LIMIT 0,10
        `);
    },

    // top 10 chuyên mục, mỗi chuyên mục 1 bài mới nhất
    latestNewsCat: () => {
        return db.load(`
            SELECT bv.*, con.*, DAY(bv.NgayDang) AS day, MONTH(bv.NgayDang) AS month, YEAR(bv.NgayDang) AS year  
            FROM baiviet bv JOIN chuyenmuccon con ON bv.ChuyenMucConID = con.ID
            GROUP BY bv.ChuyenMucConID 
            ORDER BY bv.NgayDang desc LIMIT 0,10
        `);
    },

    // 10 bai viet duoc xem nhieu nhat
    latestViews: () => {
        return db.load(`
            SELECT bv.*, con.*, DAY(bv.NgayDang) AS day, MONTH(bv.NgayDang) AS month, YEAR(bv.NgayDang) AS year  
            FROM baiviet bv JOIN chuyenmuccon con ON bv.ChuyenMucConID = con.ID
            GROUP BY bv.LuotXem
            ORDER BY bv.LuotXem desc LIMIT 0,10
        `);
    },

    // 4 bai viet noi bat nhat trong tuan
    popularNews: () => {
        return db.load(`
            SELECT bv.*, con.*, DAY(bv.NgayDang) AS day, MONTH(bv.NgayDang) AS month, YEAR(bv.NgayDang) AS year 
            FROM baiviet bv JOIN chuyenmuccon con ON bv.ChuyenMucConID = con.ID
            WHERE DATEDIFF(NOW(), bv.NgayDang) <= 7
            GROUP BY DAY(bv.NgayDang) LIMIT 4
        `);
    },

    // 5 bai viet cung chuyen muc
    // sameCat: () => {
    //     return db.load(`
    //         SELECT bv.*, con.*, DAY(bv.NgayDang) AS day, MONTH(bv.NgayDang) AS month, YEAR(bv.NgayDang) AS year  
    //         FROM baiviet bv JOIN chuyenmuccon con ON bv.ChuyenMucConID = con.ID            
    //         ORDER BY bv.NgayDang desc LIMIT 0,10
    //     `);
    // },

    allByCat: CatId => {
        return db.load(`select * from baiviet where ChuyenMucConID = ${CatId}`);
    },

    single: id => {
        return db.load(`
            SELECT bv.*, con.*, DAY(bv.NgayDang) AS day, MONTH(bv.NgayDang) AS month, YEAR(bv.NgayDang) AS year 
            FROM baiviet bv JOIN chuyenmuccon con ON bv.ChuyenMucConID = con.ID
            WHERE ProID = ${id}
        `);
    },

    add: entity => {
        return db.add('baiviet', entity);
    },

    update: entity => {
        var id = entity.ProID;
        delete entity.ProID;
        return db.update('baiviet', 'ProID', entity, id);
    },

    delete: id => {
        return db.delete('baiviet', 'ID', id)
    }

};