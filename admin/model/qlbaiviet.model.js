var db = require('../utils/db')

module.exports = {
    all: () => {       
        return db.load( 'select * from baiviet');
    },

    single: id => {       
        return db.load( `select * from baiviet where ProID = ${id}`);
    },

    add: entity => {
        return db.add('baiviet', entity)
    },

    update: entity => {
        var id = entity.ProID;
        delete entity.ProID;
        return db.update('baiviet', 'ProID', entity, id);
    },

    delete: id => {
        return db.delete('baiviet', 'ProID', id);
    }
};