const express = require('express');
const app = express();
require('dotenv').config()
const connectToDatabase = require('./db')
const productRoutes = require('./routes/product')
const cartItemRoutes = require('./routes/cartItem')
const wishItemRoutes = require('./routes/wishItem')
const addressRoutes = require('./routes/address')
const orderRoutes = require('./routes/order')

const errorHandler = require('./middleware/errorhandler');
const cors = require('cors');


connectToDatabase()

app.use(express.json());
app.use(cors());


app.use('/api/v1/products', productRoutes)
app.use('/api/v1/cartItems', cartItemRoutes)
app.use('/api/v1/wishItems', wishItemRoutes)
app.use('/api/v1/addresses', addressRoutes)
app.use('/api/v1/orders', orderRoutes)

app.use(errorHandler);


app.listen(process.env.APP_PORT, () => console.log(`listening on port ${process.env.APP_PORT}`))