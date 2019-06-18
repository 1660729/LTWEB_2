var express = require('express');
var productModel = require('../models/product.model');
var config = require('../config/default.json');

var router = express.Router();

// router.get('/:id/products', (req, res, next) => {
//     var id = req.params.id;
//     if (isNaN(id)) {
//         res.render('vwProducts/byTag', { error: true });
//         return;
//     }

//     productModel.allByTag(id).then(rows => {

//         for (var c of res.locals.lcTags) {
//             if (c.TagID === +id) {
//                 c.active = true;
//             }
//         }

//         res.render('vwProducts/byTag', {
//             error: false,
//             empty: rows.length === 0,
//             tags: rows
//         });
//     }).catch(next);
// })

router.get('/:id/products', (req, res, next) => {
    var id = req.params.id;
    if (isNaN(id)) {
        res.render('vwProducts/byTag', { error: true });
        return;
    }

    var limit = config.paginate.default;
    var page = +req.query.page || 1;
    if (page < 1) page = 1;
    var start_offset = (page - 1) * limit;

    Promise.all([
        productModel.countByTag(id),
        productModel.pageByTag(id, start_offset)
    ]).then(([nRows, rows]) => {


        for (var c of res.locals.lcTags) {
            if (c.TagID === +id) {
                c.active = true;
            }

        }

        var total = nRows[0].total;
        var nPages = Math.floor(total / limit);
        if (total % limit > 0)
            nPages++;

        var page_numbers = [];
        for (i = 1; i <= nPages; i++) {
            page_numbers.push({
                value: i,
                active: i === +page
            })
        }


        res.render('vwProducts/byTag', {
            error: false,
            empty: rows.length === 0,
            tags: rows,
            page_numbers
        })
    }).catch(next)

})


module.exports = router;