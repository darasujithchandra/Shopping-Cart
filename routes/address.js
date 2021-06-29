
var express = require('express')
var app = express()
var router = express.Router()
const Address = require('../models/address')

const { fetchAllAddresses, addAddresses, deleteCartItemById } = require('../controllers/address')

const advancedFind = require('../middleware/advancedFind');

router.route('/')
    .get(advancedFind(Address), fetchAllAddresses)
    .post(addAddresses)


router.delete('/:id', (req, res, next) => {
    Address.deleteOne({ _id: req.params.id })
        .then(result => {
            res.status(201).json({
                message: 'address deleted',
                result: result
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
})

router.patch("/:id", (req, res, next) => {
    Address.findByIdAndUpdate({ _id: req.params.id }, req.body)
        .then((result) => {
            res.status(201).json({
                message: "address updated",
                result: result,
            });
        })
        .catch((err) => {
            res.status(500).json({
                error: err,
            });
        });
});


module.exports = router

