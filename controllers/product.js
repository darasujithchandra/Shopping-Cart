const Product = require('../models/product')
const asyncHandler = require('../middleware/async');


const fetchAllProducts = asyncHandler(async (req, res, next) => {

    res.json(res.advancedResults);


})

const addProducts = asyncHandler(async (req, res, next) => {

    let productRes = await Product.create(req.body);
    console.log(productRes);
    res.status(201).json({ success: true })

})

module.exports = { fetchAllProducts, addProducts }