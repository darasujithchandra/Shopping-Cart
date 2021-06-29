
var express = require('express')
var app = express()
var router = express.Router()
const { fetchAllProducts, addProducts } = require('../controllers/product')
const Product = require('../models/product')
const advancedFind = require('../middleware/advancedFind');

router.route('/')
    .get(advancedFind(Product), fetchAllProducts)
    .post(addProducts)

module.exports = router

