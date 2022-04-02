const { verifYTokenAndAdmin, verifYTokenAndAutherization} = require('./verifyToken');
const Products =require('../models/Product')
const router = require('express').Router();


//CREATE

router.post('/new',verifYTokenAndAdmin,async(req,res)=>{
    const newProduct = new  Products(req.body)

    try {
        await newProduct.save();
        res.status(200).json(newProduct)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
    
    
});

//UPDATE

router.put('/:id',verifYTokenAndAdmin,async(req,res)=>{
    
        try {
            const updatedProduct =await Products.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true});
            res.status(200).json(updatedProduct)
        } catch (error) {res.status(500).json(error)
            
        }
    
  
});

//DELETE METHOD  

router.delete('/:id',verifYTokenAndAdmin,async (req,res)=>{
    try {
        await Products.findByIdAndDelete(req.params.id)
        res.status(200).json("Product deleted")
    } catch (error) {
        res.status(500).json(error)
        
    }

});

//GET PRODUCT

router.get('/find/:id',async (req,res)=>{
    try {
     const product = await Products.findById(req.params.id)

        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
        
    }

});

//GET ALL PRODUCTS

router.get('/',async (req,res)=>{
    const qNew =  req.query.new;
    const qCat =  req.query.category;

    try {
        let products;
        if(qnew){
            products=await Products.find().sort({createdAt: -1}).limit(5);
        }else if(qCat){
            products=await Products.find({categories:{
              $in:[qCat]  
            }});
        }else{
            products=await Products.find();
        }
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json(error)
        
    }

});



module.exports = router;
