var db = require('../utils/db');
module.exports = {
    add : entity => {
        return db.add('baiviet', entity);
    }
};