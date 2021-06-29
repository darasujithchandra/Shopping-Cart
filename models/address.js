const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const AddressSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    flatno: {
        type: String,

    },
    mobile: {
        type: Number,
        required: true,
    },
    area: {
        type: String,
    },
    landmark: {
        type: String,

    },
    city: {
        type: String,

    },
    state: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
    },

});

const Address = mongoose.model('Address', AddressSchema);

module.exports = Address;