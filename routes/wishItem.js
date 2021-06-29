var express = require('express')
var app = express()
var router = express.Router()
const { fetchAllWishItems, addWishItems } = require('../controllers/wishItem')
const WishItem = require('../models/wishItem')
const advancedFind = require('../middleware/advancedFind');

router.route('/')
    .get(advancedFind(WishItem), fetchAllWishItems)
    .post(addWishItems)

module.exports = router
