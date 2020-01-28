const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const ProductController=require('../controllers/products');
// /admin/add-product => GET
//using Router Middlewares to get the values
router.get('/add-product',ProductController.addProduct);

// /admin/add-product => POST
router.post('/add-product',ProductController.postProducts); 

//module.exports = router; 1 way of doing it
exports.routes=router;
