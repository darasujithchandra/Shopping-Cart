const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CartItemSchema = new Schema({

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
    qty: {
        type: Number,
    }
});

const CartItem = mongoose.model('CartItem', CartItemSchema);

module.exports = CartItem;