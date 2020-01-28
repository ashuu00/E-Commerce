const path = require('path');
//ouptputs all lthe products
const express = require('express');

const rootDir = require('../util/path');
const adminData=require('./admin')
const router = express.Router();
const ProductController=require('../controllers/products');
router. get('/', ProductController.addProductPage);
module.exports=router;

//module.exports = router;
