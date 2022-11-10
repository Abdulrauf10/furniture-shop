const express = require('express')

const route = express.Router()

const { getAllProducts, getProductById } = require('../controllers/productController')

route.get('/api/get-all-products', getAllProducts)
route.get('/api/get-product/:id', getProductById)

module.exports = route