var productModel = require('../models/product.model');

module.exports = (req, res, next) => {
    productModel.latestNewsCat().then(rows => {
        res.locals.productsViewCat = rows;
        next();
    });
}