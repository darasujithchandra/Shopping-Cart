const Address = require('../models/address')
const asyncHandler = require('../middleware/async');


const fetchAllAddresses = asyncHandler(async (req, res, next) => {

    res.json(res.advancedResults);

})

const addAddresses = asyncHandler(async (req, res, next) => {

    let addressRes = await Address.create(req.body);
    console.log(addressRes);
    res.status(201).json({ success: true })

})


module.exports = { fetchAllAddresses, addAddresses }