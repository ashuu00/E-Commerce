const Product=require('../models/product');

exports.addProductPage=(req, res, next)=> {
   // console.log(products);
    const products=Product.fetchAll();
    res.render('shop',{
      prods: products,
      pageTitle:'Shop',
      path:'/',
      hasProducts:products.length>0,
      activeShop:true,
      productCSS:true
    })
   
  }

exports.postProducts= (req, res, next) => {
    // console.log(req.body);
 const product=new Product(req.body.title);
 product.save(); 
     res.redirect('/');
   }

exports.addProduct= (req, res, next) => {
    res.render('add-product');
  }