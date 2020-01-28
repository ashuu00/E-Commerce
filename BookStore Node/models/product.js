const products=[];
const fs=require('fs');
const path=require('path');
const pathname=require('../util/path');

module.exports=class ProductModel{
    constructor(title){
        this.title=title;
    }
    save(){
        const p=path.join(pathname,
            'data',
            'products.json');
        fs.readFile(p,(err,fileContent)=>{
           // console.log(fileContent);
           //wecreated dummy because we can get error if no data 
           //is present inside the file
           let products=[];
            if(!err){
                products=JSON.parse(fileContent);
            }
            products.push(this);
        });
       // products.push(this);
        fs.writeFile(p,JSON.stringify(products),(err)=>{
            console.log(err);
        });
    }
    static fetchAll(){
        return products;

    }
}