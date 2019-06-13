var db = require('../utils/db')

module.exports = {
    all: () => {       
        return db.load( 'select * from chuyenmuccon');
    },

    single: id => {       
        return db.load( `select * from chuyenmuccon where ID = ${id}`);
    },

    add: entity => {
        return db.add('chuyenmuccon', entity)
    },

    update: entity => {
        var id = entity.ID;
        delete entity.ID;
        return db.update('chuyenmuccon', 'ID', entity, id);
    },

    delete: id => {
        return db.delete('chuyenmuccon', 'ID', id);
    }
};