const CartItem = require('../models/cartItem')
const asyncHandler = require('../middleware/async');


const fetchAllCartItems = asyncHandler(async (req, res, next) => {

    res.json(res.advancedResults);


})

const addCartItems = asyncHandler(async (req, res, next) => {


    let cartItemRes = await CartItem.create(req.body);
    console.log(cartItemRes);
    res.status(201).json({ success: true })

})


module.exports = { fetchAllCartItems, addCartItems }