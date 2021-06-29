const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const WishItemSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,

    },
    price: {
        type: Number,
        required: true,
    },
    countInStock: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,

    },
});

const WishItem = mongoose.model('WishItem', WishItemSchema);

module.exports = WishItem;