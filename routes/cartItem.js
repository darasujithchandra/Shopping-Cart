
var express = require('express')
var app = express()
var router = express.Router()
const CartItem = require('../models/cartItem')
const asyncHandler = require('../middleware/async');

const { fetchAllCartItems, addCartItems, deleteCartItemById } = require('../controllers/cartItem')

const advancedFind = require('../middleware/advancedFind');

router.route('/')
    .get(advancedFind(CartItem), fetchAllCartItems)
    .post(addCartItems)


router.delete('/:id', (req, res, next) => {
    CartItem.deleteOne({ _id: req.params.id })
        .then(result => {
            res.status(201).json({
                message: 'product deleted',
                result: result
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
})

router.patch('/:id', asyncHandler(async (req, res, next) => {
    await CartItem.findByIdAndUpdate({ _id: req.params.id }, { qty: req.body.qty })
        .then(result => {
            res.status(201).json({
                message: 'Quantity Updated',
                result: result
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })

})
)


module.exports = router

