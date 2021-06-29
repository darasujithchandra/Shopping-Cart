const WishItem = require('../models/wishItem')
const asyncHandler = require('../middleware/async');


const fetchAllWishItems = asyncHandler(async (req, res, next) => {

    res.json(res.advancedResults);


})

const addWishItems = asyncHandler(async (req, res, next) => {

    let wishItemRes = await WishItem.create(req.body);
    console.log(wishItemRes);
    res.status(201).json({ success: true })

})

module.exports = { fetchAllWishItems, addWishItems }