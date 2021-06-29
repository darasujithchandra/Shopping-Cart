const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({

    amount: {
        type: Number
    },
    books: {
        type: Array
    },
    address: {
        type: Object,
    },
    orderDate: {
        type: Date,
        default: new Date(),
    },
    status: {
        type: String,
        default: "Placed"
    },
    paymentStatus: {
        type: Boolean,
        default: true
    }
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;